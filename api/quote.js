// VoltLot — Quote Request API Handler
// Vercel Serverless Function · Sends formatted HTML email via Resend

import { Redis } from '@upstash/redis';

// ── Rate limit config ──
const RATE_LIMIT_WINDOW_SEC = 15 * 60; // 15 minutes
const RATE_LIMIT_MAX = 5;

// ── Upstash Redis client (only created if env vars are present) ──
let redis = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
}

// ── In-memory fallback rate limiter ──
const rateLimitMap = new Map();
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap) {
        if (now - entry.windowStart > RATE_LIMIT_WINDOW_SEC * 1000) {
            rateLimitMap.delete(key);
        }
    }
}, RATE_LIMIT_WINDOW_SEC * 1000);

function getRateLimitKey(req) {
    return req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
           req.headers['x-real-ip'] ||
           req.socket?.remoteAddress ||
           'unknown';
}

async function isRateLimited(ip) {
    if (redis) {
        try {
            const key = `rl:${ip}`;
            const count = await redis.incr(key);
            if (count === 1) {
                await redis.expire(key, RATE_LIMIT_WINDOW_SEC);
            }
            return count > RATE_LIMIT_MAX;
        } catch (err) {
            console.error('Redis rate limit error, falling back to in-memory:', err);
        }
    }
    // In-memory fallback (per-instance, used when Redis is not configured)
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_SEC * 1000) {
        rateLimitMap.set(ip, { windowStart: now, count: 1 });
        return false;
    }
    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

// ── Field length limits ──
const FIELD_LIMITS = {
    fullName:     100,
    email:        254,
    company:      200,
    phone:         30,
    category:      50,
    model:        200,
    quantity:      10,
    grade:         10,
    destination:  100,
    requirements: 2000,
};

// ── Format validators ──
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s\-().]{7,30}$/;

export default async function handler(req, res) {
    // ── CORS headers ──
    res.setHeader('Access-Control-Allow-Origin', 'https://voltlot.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // ── Rate limiting ──
    const clientIp = getRateLimitKey(req);
    if (await isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    // ── Validate environment ──
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL || 'info@edgewoodgt.com';
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'VoltLot <onboarding@resend.dev>';

    if (!RESEND_API_KEY) {
        console.error('Missing RESEND_API_KEY environment variable');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    // ── Honeypot bot detection ──
    const { website: honeypot } = req.body || {};
    if (honeypot) {
        // Bots fill hidden fields — silently reject but return 200 to avoid tipping them off
        return res.status(200).json({ success: true, quoteId: 'VL-0000' });
    }

    // ── Parse form data ──
    const {
        fullName,
        email,
        company,
        phone,
        category,
        model,
        quantity,
        grade,
        destination,
        requirements
    } = req.body || {};

    // ── Required field presence ──
    if (!fullName || !email || !phone || !category || !destination) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // ── Length limits ──
    const fields = { fullName, email, company, phone, category, model, quantity, grade, destination, requirements };
    for (const [field, value] of Object.entries(fields)) {
        if (value && String(value).length > FIELD_LIMITS[field]) {
            return res.status(400).json({ error: `Field '${field}' exceeds maximum length` });
        }
    }

    // ── Format validation ──
    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!PHONE_RE.test(phone)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    // ── Grade display mapping ──
    const gradeLabels = {
        'aa': 'AA+ (Like New)',
        'a+': 'A+ (Light Wear, Fully Functional)',
        'a': 'A (Light Wear, Partially Functional)',
        'b+': 'B+ (More Wear, Fully Functional)',
        'b': 'B (More Wear, Partially Functional)',
        'c': 'C (For Parts/Repair)',
        '': 'Any Grade'
    };

    const categoryLabels = {
        'iphone': 'iPhone',
        'android': 'Android Smartphones',
        'laptops': 'Laptops',
        'tablets': 'Tablets',
        'smartwatches': 'Smartwatches',
        'airpods': 'AirPods & Audio',
        'iphone-lot': 'iPhone Mixed Lot',
        'android-lot': 'Android Wholesale Bundle'
    };

    // ── Allowlist validation ──
    if (!Object.prototype.hasOwnProperty.call(categoryLabels, category)) {
        return res.status(400).json({ error: 'Invalid category' });
    }
    if (grade && !Object.prototype.hasOwnProperty.call(gradeLabels, grade)) {
        return res.status(400).json({ error: 'Invalid grade' });
    }

    // ── Quantity numeric validation ──
    if (quantity && (!/^\d+$/.test(quantity) || parseInt(quantity, 10) < 1)) {
        return res.status(400).json({ error: 'Quantity must be a positive integer' });
    }

    // ── Build HTML email ──
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    const quoteId = `VL-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                    <!-- Header -->
                    <tr>
                        <td style="background:#0f4c81;padding:28px 32px;border-radius:12px 12px 0 0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">⚡ VoltLot</h1>
                                        <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">Wholesale Electronics Export</p>
                                    </td>
                                    <td align="right" style="vertical-align:top;">
                                        <span style="display:inline-block;background:rgba(255,255,255,0.15);color:#ffffff;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;">New Quote</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="background:#ffffff;padding:32px;">

                            <!-- Quote ID & Date -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                                <tr>
                                    <td style="background:#f0f7ff;padding:16px 20px;border-radius:8px;border-left:4px solid #2563eb;">
                                        <p style="margin:0 0 4px;font-size:13px;color:#6b7280;">Quote Reference</p>
                                        <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">${quoteId}</p>
                                        <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">${dateStr}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Customer Information -->
                            <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e5e7eb;padding-bottom:8px;">
                                👤 Customer Information
                            </h2>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                                <tr>
                                    <td width="50%" style="padding:8px 0;vertical-align:top;">
                                        <p style="margin:0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Full Name</p>
                                        <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:600;">${escapeHtml(fullName)}</p>
                                    </td>
                                    <td width="50%" style="padding:8px 0;vertical-align:top;">
                                        <p style="margin:0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Company</p>
                                        <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:600;">${company ? escapeHtml(company) : '<span style="color:#9ca3af;">Not provided</span>'}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="50%" style="padding:8px 0;vertical-align:top;">
                                        <p style="margin:0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
                                        <p style="margin:4px 0 0;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a></p>
                                    </td>
                                    <td width="50%" style="padding:8px 0;vertical-align:top;">
                                        <p style="margin:0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Phone</p>
                                        <p style="margin:4px 0 0;font-size:15px;"><a href="tel:${escapeHtml(phone)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(phone)}</a></p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Order Details -->
                            <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e5e7eb;padding-bottom:8px;">
                                📦 Order Details
                            </h2>
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                                <tr style="background:#f9fafb;">
                                    <td style="padding:12px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;width:40%;">Category</td>
                                    <td style="padding:12px 16px;font-size:14px;color:#111827;font-weight:600;border-bottom:1px solid #e5e7eb;">${categoryLabels[category] || escapeHtml(category)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">Model / Device</td>
                                    <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${model ? escapeHtml(model) : '<span style="color:#9ca3af;">Not specified</span>'}</td>
                                </tr>
                                <tr style="background:#f9fafb;">
                                    <td style="padding:12px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">Quantity</td>
                                    <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;font-weight:600;">${quantity ? escapeHtml(quantity) + ' units' : '<span style="color:#9ca3af;">Not specified</span>'}</td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 16px;font-size:13px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">Preferred Grade</td>
                                    <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${gradeLabels[grade] || escapeHtml(grade) || 'Any Grade'}</td>
                                </tr>
                                <tr style="background:#f9fafb;">
                                    <td style="padding:12px 16px;font-size:13px;color:#6b7280;font-weight:600;">Destination</td>
                                    <td style="padding:12px 16px;font-size:14px;color:#111827;font-weight:600;">📍 ${escapeHtml(destination)}</td>
                                </tr>
                            </table>

                            <!-- Additional Requirements -->
                            ${requirements ? `
                            <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e5e7eb;padding-bottom:8px;">
                                📝 Additional Requirements
                            </h2>
                            <div style="background:#f9fafb;padding:16px 20px;border-radius:8px;margin-bottom:28px;border:1px solid #e5e7eb;">
                                <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;white-space:pre-wrap;">${escapeHtml(requirements)}</p>
                            </div>
                            ` : ''}

                            <!-- Quick Actions -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding:8px 0;">
                                        <a href="mailto:${escapeHtml(email)}?subject=Re: Quote ${quoteId} — VoltLot&body=Hi ${escapeHtml(fullName)},%0A%0AThank you for your quote request. " style="display:inline-block;background:#0f4c81;color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                                            ↩️ Reply to Customer
                                        </a>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#f9fafb;padding:20px 32px;border-radius:0 0 12px 12px;border-top:1px solid #e5e7eb;">
                            <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                                This email was automatically generated by VoltLot's quote request form.<br>
                                © ${now.getFullYear()} VoltLot · <a href="https://voltlot.com" style="color:#2563eb;text-decoration:none;">voltlot.com</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`.trim();

    // ── Send via Resend API ──
    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: SENDER_EMAIL,
                to: [RECIPIENT_EMAIL],
                subject: `📦 New Quote Request: ${categoryLabels[category] || category} — ${escapeHtml(fullName)}`,
                html: htmlEmail,
                reply_to: email
            })
        });

        const result = await response.json();

        if (response.ok) {
            console.log(`✅ Quote email sent: ${quoteId} → ${RECIPIENT_EMAIL}`);
            return res.status(200).json({ success: true, quoteId });
        } else {
            console.error('Resend API error:', result);
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } catch (err) {
        console.error('Email send error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

// ── HTML escape utility ──
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
