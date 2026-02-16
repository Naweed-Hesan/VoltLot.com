# ⚡ VoltLot — Wholesale Electronics Export

A modern, responsive single-page website for VoltLot's wholesale electronics export business. Built as a static site with a Vercel serverless backend for form handling.

**Live URL:** [voltlot.com](https://voltlot.com)

---

## 📁 Project Structure

```
voltlot/
├── public/                     # Static files (served by Vercel)
│   ├── index.html              # Main website (single-page)
│   ├── images/                 # 76 product images (webp format)
│   │   ├── iphones-banner.webp
│   │   ├── iphone-16-pro-max.webp
│   │   ├── macbook-pro-16-m4-max.webp
│   │   └── ... (76 total)
│   ├── robots.txt              # SEO — crawler directives
│   ├── sitemap.xml             # SEO — sitemap
│   ├── site.webmanifest        # PWA manifest
│   ├── favicon.ico             # Browser tab icon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
├── api/
│   └── quote.js                # Serverless function — handles quote form → email
├── vercel.json                 # Vercel deployment config
├── package.json
├── .env.example                # Required environment variables template
├── .gitignore
└── README.md
```

---

## 🚀 Deployment Guide

### Prerequisites

- [GitHub](https://github.com) account
- [Vercel](https://vercel.com) account (free tier works)
- [Resend](https://resend.com) account (free — 3,000 emails/month)

### Step 1: Set Up Resend (Email Service)

1. Go to [resend.com](https://resend.com) and create an account
2. Go to **API Keys** → Create a new API key
3. Copy the key (starts with `re_...`) — you'll need it in Step 3

> **Optional but recommended:** Go to **Domains** → Add `voltlot.com` and follow DNS verification steps. This lets you send from `noreply@voltlot.com` instead of Resend's shared domain.

### Step 2: Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects the config — just click **Deploy**

### Step 3: Add Environment Variables

In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**, add:

| Variable | Value | Required |
|---|---|---|
| `RESEND_API_KEY` | `re_your_api_key_here` | ✅ Yes |
| `QUOTE_RECIPIENT_EMAIL` | `info@edgewoodgt.com` | Optional (this is the default) |
| `SENDER_EMAIL` | `VoltLot <noreply@voltlot.com>` | Optional (requires verified domain in Resend) |

> After adding variables, **redeploy** for them to take effect.

### Step 4: Connect Domain

1. In Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add `voltlot.com`
3. Follow the DNS instructions (add CNAME or A records at your domain registrar)
4. Vercel auto-provisions SSL

---

## 🛠 Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/voltlot.git
cd voltlot

# Create local env file
cp .env.example .env.local

# Edit .env.local with your Resend API key
nano .env.local

# Run locally with Vercel CLI
npx vercel dev
```

Opens at `http://localhost:3000`

---

## 📧 How the Quote Form Works

1. User fills out the quote form on the website
2. Frontend sends a `POST` request to `/api/quote`
3. The serverless function formats the data into a professional HTML email
4. Email is sent via Resend API to `info@edgewoodgt.com`
5. Email includes a "Reply to Customer" button pre-filled with the customer's email
6. Each quote gets a unique reference ID (e.g., `VL-20260212-1430`)

---

## 📋 TODO / Future Improvements

- [ ] Replace `TODO_WHATSAPP_NUMBER` in the HTML with your real WhatsApp number
- [ ] Replace placeholder phone numbers in the footer with real numbers
- [ ] Add Google Analytics or Plausible analytics tracking
- [ ] Add customer confirmation email (auto-reply to submitter)
- [ ] Consider adding a product image CDN (Cloudinary, imgix, etc.) for faster loading

---

## 🔧 Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS (no framework — fast & simple)
- **Backend:** Vercel Serverless Functions (Node.js 18+)
- **Email:** Resend API
- **Hosting:** Vercel (free tier)
- **Fonts:** DM Sans + Playfair Display (Google Fonts)
- **Icons:** Material Symbols (Google)

---

## 📄 License

Private — All rights reserved © 2026 VoltLot
