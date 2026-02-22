// ===== DATA =====
const carouselSlides = [
    {
        title: 'Premium iPhone Stock',
        subtitle: 'Latest models at wholesale prices',
        description: 'Source iPhone 16, 15, and 14 series from verified liquidation auctions. All grades available with full transparency.',
        image: '/images/iphones-banner.webp',
        bg: '#f0f4ff',
        category: 'iphone'
    },
    {
        title: 'Android Stock',
        subtitle: 'Samsung, Google & OnePlus wholesale',
        description: 'Galaxy S24, Pixel 9, and OnePlus 12 series at competitive wholesale rates. Certified pre-owned with full manifests.',
        image: '/images/androids-banner.webp',
        bg: '#f5f0ff',
        category: 'android'
    },
    {
        title: 'Laptops Stock',
        subtitle: 'Professional grade computing',
        description: 'Premium MacBooks, Dell XPS, and ThinkPad inventory. Perfect for international resale markets.',
        image: '/images/laptops-banner.webp',
        bg: '#f5f5f0',
        category: 'laptops'
    },
    {
        title: 'Tablets Stock',
        subtitle: 'iPad & Samsung tablets in bulk',
        description: 'iPad Pro, iPad Air, and Galaxy Tab series sourced from verified liquidation channels. All grades from AA+ to C.',
        image: '/images/tablets-banner.webp',
        bg: '#f0fff5',
        category: 'tablets'
    }
];

const categories = [
    { name: 'iPhone', key: 'iphone', icon: 'phone_iphone', description: 'Latest Apple smartphones', image: '/images/iphone-16-pro.webp' },
    { name: 'Android', key: 'android', icon: 'smartphone', description: 'Samsung, Google, OnePlus', image: '/images/samsung-galaxy-s24-ultra.webp' },
    { name: 'Laptops', key: 'laptops', icon: 'laptop_mac', description: 'MacBooks & Windows laptops', image: '/images/macbook-pro-14-m4.webp' },
    { name: 'Tablets', key: 'tablets', icon: 'tablet_mac', description: 'iPad, Samsung Galaxy Tab, and more', image: '/images/ipad-pro-13-m4.webp' },
    { name: 'Smartwatches', key: 'smartwatches', icon: 'watch', description: 'Apple Watch & more', image: '/images/apple-watch-ultra-2.webp' },
    { name: 'AirPods', key: 'airpods', icon: 'headphones', description: 'Wireless earbuds & headphones', image: '/images/airpods-pro-2-usb-c.webp' },
    { name: 'iPhone Mixed Lot', key: 'iphone-lot', icon: 'inventory_2', description: 'Bulk bundles & wholesale lots', image: '/images/iphone-mixed-lot-11-15-series.webp' },
    { name: 'Android Bundle', key: 'android-lot', icon: 'inventory', description: 'Samsung & Google bulk inventory', image: '/images/android-mixed-lot.webp' }
];

const productDatabase = {
    iphone: [
        // iPhone 16 Series
        { name: 'iPhone 16 Pro Max', image: '/images/iphone-16-pro-max.webp', badge: 'Latest', specs: ['A18 Pro Chip', '8GB RAM', 'Up to 1TB', '48MP Camera', 'Titanium'], fullSpecs: { 'Display': '6.9" Super Retina XDR OLED', 'Processor': 'A18 Pro Bionic', 'RAM': '8GB', 'Storage': '256GB / 512GB / 1TB', 'Camera': '48MP Fusion + 48MP UW + 12MP 5x Tele', 'Battery': 'Up to 33 hours video', 'Build': 'Grade 5 Titanium' } },
        { name: 'iPhone 16 Pro', image: '/images/iphone-16-pro.webp', badge: 'Latest', specs: ['A18 Pro Chip', '8GB RAM', 'Camera Control', 'Action Button'], fullSpecs: { 'Display': '6.3" Super Retina XDR OLED', 'Processor': 'A18 Pro Bionic', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB / 1TB', 'Camera': '48MP Fusion + 48MP UW + 12MP Tele' } },
        { name: 'iPhone 16 Plus', image: '/images/iphone-16-plus.webp', badge: 'Latest', specs: ['A18 Chip', '8GB RAM', '6.7" Display', 'Action Button'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A18 Bionic', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '48MP Fusion + 12MP Ultra Wide', 'Battery': 'Up to 27 hours video' } },
        { name: 'iPhone 16', image: '/images/iphone-16.webp', badge: 'Latest', specs: ['A18 Chip', '8GB RAM', '6.1" Display', 'Camera Control'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A18 Bionic', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '48MP Fusion + 12MP Ultra Wide' } },
        // iPhone 15 Series
        { name: 'iPhone 15 Pro Max', image: '/images/iphone-15-pro-max.webp', badge: 'Popular', specs: ['A17 Pro Chip', '8GB RAM', 'Titanium Build', '5x Telephoto'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A17 Pro Bionic', 'RAM': '8GB', 'Storage': '256GB / 512GB / 1TB', 'Camera': '48MP + 12MP UW + 12MP 5x Tele' } },
        { name: 'iPhone 15 Pro', image: '/images/iphone-15-pro.webp', badge: 'Popular', specs: ['A17 Pro Chip', '8GB RAM', 'Action Button', 'USB-C'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A17 Pro Bionic', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'iPhone 15 Plus', image: '/images/iphone-15-plus.webp', badge: 'Popular', specs: ['A16 Bionic', '6GB RAM', '6.7" Display', 'USB-C'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A16 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '48MP Main + 12MP Ultra Wide' } },
        { name: 'iPhone 15', image: '/images/iphone-15.webp', badge: 'Popular', specs: ['A16 Bionic', '6GB RAM', 'Dynamic Island', 'USB-C'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A16 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '48MP Main + 12MP Ultra Wide' } },
        // iPhone 14 Series
        { name: 'iPhone 14 Pro Max', image: '/images/iphone-14-pro-max.webp', badge: 'Value', specs: ['A16 Bionic', 'Dynamic Island', '48MP Camera', 'ProMotion'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A16 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'iPhone 14 Pro', image: '/images/iphone-14-pro.webp', badge: 'Value', specs: ['A16 Bionic', 'Dynamic Island', '48MP Camera', 'Always-On'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A16 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB / 1TB', 'Camera': '48MP Main + 12MP UW + 12MP Tele' } },
        { name: 'iPhone 14 Plus', image: '/images/iphone-14-plus.webp', badge: 'Value', specs: ['A15 Bionic', '6GB RAM', '6.7" Display', 'All-Day Battery'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A15 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '12MP Dual Camera' } },
        { name: 'iPhone 14', image: '/images/iphone-14.webp', badge: 'Value', specs: ['A15 Bionic', '6GB RAM', 'Crash Detection', 'Satellite SOS'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A15 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '12MP Dual Camera' } },
        // iPhone 13 Series
        { name: 'iPhone 13 Pro Max', image: '/images/iphone-13-pro-max.webp', badge: 'Value', specs: ['A15 Bionic', '6GB RAM', 'ProMotion 120Hz', '3x Telephoto'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED 120Hz', 'Processor': 'A15 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB / 1TB', 'Camera': '12MP Triple Camera' } },
        { name: 'iPhone 13 Pro', image: '/images/iphone-13-pro.webp', badge: 'Value', specs: ['A15 Bionic', '6GB RAM', 'ProMotion 120Hz', 'Macro Camera'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED 120Hz', 'Processor': 'A15 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'iPhone 13', image: '/images/iphone-13.webp', badge: 'Budget', specs: ['A15 Bionic', '4GB RAM', 'Dual Camera', 'Great Battery'], fullSpecs: { 'Display': '6.1" Super Retina XDR', 'Processor': 'A15 Bionic', 'RAM': '4GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '12MP Dual Camera' } },
        { name: 'iPhone 13 Mini', image: '/images/iphone-13-mini.webp', badge: 'Compact', specs: ['A15 Bionic', '4GB RAM', '5.4" Display', 'Lightweight'], fullSpecs: { 'Display': '5.4" Super Retina XDR OLED', 'Processor': 'A15 Bionic', 'RAM': '4GB', 'Storage': '128GB / 256GB / 512GB' } },
        // iPhone 12 Series
        { name: 'iPhone 12 Pro Max', image: '/images/iphone-12-pro-max.webp', badge: 'Budget', specs: ['A14 Bionic', '6GB RAM', 'LiDAR Scanner', '2.5x Telephoto'], fullSpecs: { 'Display': '6.7" Super Retina XDR OLED', 'Processor': 'A14 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB', 'Camera': '12MP Triple Camera + LiDAR' } },
        { name: 'iPhone 12 Pro', image: '/images/iphone-12-pro.webp', badge: 'Budget', specs: ['A14 Bionic', '6GB RAM', 'LiDAR Scanner', 'ProRAW'], fullSpecs: { 'Display': '6.1" Super Retina XDR OLED', 'Processor': 'A14 Bionic', 'RAM': '6GB', 'Storage': '128GB / 256GB / 512GB' } },
        { name: 'iPhone 12', image: '/images/iphone-12.webp', badge: 'Budget', specs: ['A14 Bionic', '4GB RAM', '5G Support', 'OLED Display'], fullSpecs: { 'Display': '6.1" Super Retina XDR', 'Processor': 'A14 Bionic', 'RAM': '4GB', 'Storage': '64GB / 128GB / 256GB', 'Camera': '12MP Dual Camera' } },
        { name: 'iPhone 12 Mini', image: '/images/iphone-12-mini.webp', badge: 'Compact', specs: ['A14 Bionic', '4GB RAM', '5.4" Display', '5G Support'], fullSpecs: { 'Display': '5.4" Super Retina XDR OLED', 'Processor': 'A14 Bionic', 'RAM': '4GB', 'Storage': '64GB / 128GB / 256GB' } },
        // Older & SE
        { name: 'iPhone 11 Pro Max', image: '/images/iphone-11-pro-max.webp', badge: 'Budget', specs: ['A13 Bionic', '4GB RAM', 'Triple Camera', 'Super Retina XDR'], fullSpecs: { 'Display': '6.5" Super Retina XDR OLED', 'Processor': 'A13 Bionic', 'RAM': '4GB', 'Storage': '64GB / 256GB / 512GB', 'Camera': '12MP Triple Camera' } },
        { name: 'iPhone 11', image: '/images/iphone-11.webp', badge: 'Budget', specs: ['A13 Bionic', 'Dual Camera', 'LCD Display', 'All-Day Battery'], fullSpecs: { 'Display': '6.1" Liquid Retina LCD', 'Processor': 'A13 Bionic', 'RAM': '4GB', 'Storage': '64GB / 128GB / 256GB' } },
        { name: 'iPhone SE (3rd Gen)', image: '/images/iphone-13-alt.webp', badge: 'Compact', specs: ['A15 Bionic', 'Touch ID', 'Compact 4.7"', '5G'], fullSpecs: { 'Display': '4.7" Retina HD', 'Processor': 'A15 Bionic', 'RAM': '4GB', 'Storage': '64GB / 128GB / 256GB', 'Camera': '12MP Single' } },
        { name: 'iPhone SE (2nd Gen)', image: '/images/iphone-13-alt.webp', badge: 'Budget', specs: ['A13 Bionic', 'Touch ID', 'Compact 4.7"', '4G LTE'], fullSpecs: { 'Display': '4.7" Retina HD', 'Processor': 'A13 Bionic', 'RAM': '3GB', 'Storage': '64GB / 128GB / 256GB' } }
    ],
    android: [
        // Samsung Flagships
        { name: 'Samsung Galaxy S24 Ultra', image: '/images/samsung-galaxy-s24-ultra.webp', badge: 'Latest', specs: ['Snapdragon 8 Gen 3', '12GB RAM', '200MP Camera', 'S Pen'], fullSpecs: { 'Display': '6.8" Dynamic AMOLED 2X QHD+', 'Processor': 'Snapdragon 8 Gen 3', 'RAM': '12GB', 'Storage': '256GB / 512GB / 1TB', 'Camera': '200MP + 50MP + 12MP + 10MP' } },
        { name: 'Samsung Galaxy S24+', image: '/images/samsung-galaxy-s24+.webp', badge: 'Latest', specs: ['Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera', 'Vision Booster'], fullSpecs: { 'Display': '6.7" Dynamic AMOLED 2X QHD+', 'Processor': 'Snapdragon 8 Gen 3', 'RAM': '12GB', 'Storage': '256GB / 512GB', 'Camera': '50MP + 12MP + 10MP' } },
        { name: 'Samsung Galaxy S24', image: '/images/samsung-galaxy-s24.webp', badge: 'Latest', specs: ['Snapdragon 8 Gen 3', '8GB RAM', '50MP Camera', 'Galaxy AI'], fullSpecs: { 'Display': '6.2" Dynamic AMOLED 2X FHD+', 'Processor': 'Snapdragon 8 Gen 3', 'RAM': '8GB', 'Storage': '128GB / 256GB', 'Camera': '50MP + 12MP + 10MP' } },
        { name: 'Samsung Galaxy S23 Ultra', image: '/images/samsung-galaxy-s23-ultra.webp', badge: 'Popular', specs: ['Snapdragon 8 Gen 2', '12GB RAM', '200MP Camera', 'S Pen'], fullSpecs: { 'Display': '6.8" Dynamic AMOLED 2X QHD+', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '8GB / 12GB', 'Storage': '256GB / 512GB / 1TB', 'Camera': '200MP Quad Camera' } },
        { name: 'Samsung Galaxy S23', image: '/images/samsung-galaxy-s23.webp', badge: 'Value', specs: ['Snapdragon 8 Gen 2', '8GB RAM', '50MP Camera', 'Compact'], fullSpecs: { 'Display': '6.1" Dynamic AMOLED 2X FHD+', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '8GB', 'Storage': '128GB / 256GB' } },
        { name: 'Samsung Galaxy S22 Ultra', image: '/images/samsung-galaxy-s22-ultra.webp', badge: 'Budget', specs: ['Snapdragon 8 Gen 1', '12GB RAM', '108MP Camera', 'S Pen'], fullSpecs: { 'Display': '6.8" Dynamic AMOLED 2X QHD+', 'Processor': 'Snapdragon 8 Gen 1', 'RAM': '8GB / 12GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        // Samsung A-Series
        { name: 'Samsung Galaxy A54', image: '/images/samsung-galaxy-a54.webp', badge: 'Value', specs: ['Exynos 1380', '8GB RAM', '120Hz AMOLED', 'Great Battery'], fullSpecs: { 'Display': '6.4" Super AMOLED 120Hz', 'Processor': 'Exynos 1380', 'RAM': '6GB / 8GB', 'Storage': '128GB / 256GB', 'Camera': '50MP Triple Camera' } },
        { name: 'Samsung Galaxy A34', image: '/images/samsung-galaxy-a34.webp', badge: 'Budget', specs: ['Dimensity 1080', '6GB RAM', '120Hz AMOLED', '5000mAh'], fullSpecs: { 'Display': '6.6" Super AMOLED 120Hz', 'Processor': 'MediaTek Dimensity 1080', 'RAM': '6GB / 8GB', 'Storage': '128GB / 256GB' } },
        // Google Pixel
        { name: 'Google Pixel 9 Pro', image: '/images/google-pixel-9-pro.webp', badge: 'AI Powered', specs: ['Tensor G4', '16GB RAM', 'Best Camera AI', 'Gemini'], fullSpecs: { 'Display': '6.3" LTPO OLED 120Hz', 'Processor': 'Google Tensor G4', 'RAM': '16GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'Google Pixel 9', image: '/images/google-pixel-9.webp', badge: 'Latest', specs: ['Tensor G4', '12GB RAM', '50MP Camera', 'AI Features'], fullSpecs: { 'Display': '6.3" Actua OLED 120Hz', 'Processor': 'Google Tensor G4', 'RAM': '12GB', 'Storage': '128GB / 256GB', 'Camera': '50MP + 48MP Ultra Wide' } },
        { name: 'Google Pixel 8 Pro', image: '/images/google-pixel-8-pro.webp', badge: 'Popular', specs: ['Tensor G3', '12GB RAM', '50MP Camera', '7 Years Updates'], fullSpecs: { 'Display': '6.7" LTPO OLED 120Hz', 'Processor': 'Google Tensor G3', 'RAM': '12GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'Google Pixel 8', image: '/images/google-pixel-8-copy.webp', badge: 'Value', specs: ['Tensor G3', '8GB RAM', '50MP Camera', 'Clean Android'], fullSpecs: { 'Display': '6.2" OLED 120Hz', 'Processor': 'Google Tensor G3', 'RAM': '8GB', 'Storage': '128GB / 256GB' } },
        { name: 'Google Pixel 7a', image: '/images/google-pixel-7a.webp', badge: 'Budget', specs: ['Tensor G2', 'Best Camera Value', '90Hz Display', 'Clean Android'], fullSpecs: { 'Display': '6.1" OLED 90Hz', 'Processor': 'Google Tensor G2', 'RAM': '8GB', 'Storage': '128GB', 'Camera': '64MP Dual Camera' } },
        // OnePlus
        { name: 'OnePlus 12', image: '/images/oneplus-12.webp', badge: 'Fast Charge', specs: ['Snapdragon 8 Gen 3', '100W Charging', 'Hasselblad', '16GB RAM'], fullSpecs: { 'Display': '6.82" AMOLED 120Hz', 'Processor': 'Snapdragon 8 Gen 3', 'RAM': '12GB / 16GB', 'Storage': '256GB / 512GB' } },
        { name: 'OnePlus 11', image: '/images/oneplus-11.webp', badge: 'Value', specs: ['Snapdragon 8 Gen 2', '100W Charging', 'Hasselblad', '16GB RAM'], fullSpecs: { 'Display': '6.7" AMOLED 120Hz QHD+', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '8GB / 16GB', 'Storage': '128GB / 256GB' } },
        // Samsung Foldables
        { name: 'Samsung Galaxy Z Fold 5', image: '/images/samsung-galaxy-z-fold-5.webp', badge: 'Foldable', specs: ['Snapdragon 8 Gen 2', '12GB RAM', '7.6" Main Display', 'Flex Mode'], fullSpecs: { 'Display': '7.6" Dynamic AMOLED 2X (Main)', 'Cover Display': '6.2" Dynamic AMOLED 2X', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '12GB', 'Storage': '256GB / 512GB / 1TB' } },
        { name: 'Samsung Galaxy Z Flip 5', image: '/images/samsung-galaxy-z-flip-5.webp', badge: 'Foldable', specs: ['Snapdragon 8 Gen 2', '8GB RAM', 'Flex Window', 'Compact'], fullSpecs: { 'Display': '6.7" Dynamic AMOLED 2X (Main)', 'Cover Display': '3.4" Super AMOLED', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '8GB', 'Storage': '256GB / 512GB' } }
    ],
    laptops: [
        // MacBooks
        { name: 'MacBook Pro 16" M4 Max', image: '/images/macbook-pro-16-m4-max.webp', badge: 'Latest', specs: ['M4 Max Chip', 'Up to 128GB RAM', 'Up to 8TB SSD', 'Liquid Retina XDR'], fullSpecs: { 'Display': '16.2" Liquid Retina XDR', 'Processor': 'Apple M4 Max', 'RAM': '36GB / 48GB / 64GB / 128GB', 'Storage': '512GB to 8TB', 'Battery': 'Up to 24 hours' } },
        { name: 'MacBook Pro 14" M4 Pro', image: '/images/macbook-pro-16-m4-max.webp', badge: 'Latest', specs: ['M4 Pro Chip', 'Up to 48GB RAM', 'Up to 4TB SSD', 'ProMotion'], fullSpecs: { 'Display': '14.2" Liquid Retina XDR', 'Processor': 'Apple M4 Pro', 'RAM': '24GB / 48GB', 'Storage': '512GB to 4TB', 'Battery': 'Up to 22 hours' } },
        { name: 'MacBook Pro 14" M4', image: '/images/macbook-pro-16-m4-max.webp', badge: 'Latest', specs: ['M4 Chip', '16GB / 24GB RAM', 'Thunderbolt 4', 'ProMotion'], fullSpecs: { 'Display': '14.2" Liquid Retina XDR', 'Processor': 'Apple M4', 'RAM': '16GB / 24GB', 'Storage': '512GB / 1TB / 2TB', 'Battery': 'Up to 22 hours' } },
        { name: 'MacBook Air 15" M3', image: '/images/macbook-air-15-m3.webp', badge: 'Popular', specs: ['M3 Chip', '24GB RAM Option', 'Fanless', 'All-Day Battery'], fullSpecs: { 'Display': '15.3" Liquid Retina', 'Processor': 'Apple M3', 'RAM': '8GB / 16GB / 24GB', 'Storage': '256GB to 2TB' } },
        { name: 'MacBook Air 13" M3', image: '/images/macbook-air-13-m1.webp', badge: 'Popular', specs: ['M3 Chip', 'Up to 24GB RAM', 'Fanless Design', '18hr Battery'], fullSpecs: { 'Display': '13.6" Liquid Retina', 'Processor': 'Apple M3', 'RAM': '8GB / 16GB / 24GB', 'Storage': '256GB to 2TB' } },
        { name: 'MacBook Air 13" M2', image: '/images/macbook-air-13-m1.webp', badge: 'Value', specs: ['M2 Chip', 'Up to 24GB RAM', 'MagSafe', 'Midnight Blue'], fullSpecs: { 'Display': '13.6" Liquid Retina', 'Processor': 'Apple M2', 'RAM': '8GB / 16GB / 24GB', 'Storage': '256GB to 2TB' } },
        { name: 'MacBook Air 13" M1', image: '/images/macbook-air-13-m1.webp', badge: 'Budget', specs: ['M1 Chip', 'Fanless Design', '18hr Battery', 'Lightweight'], fullSpecs: { 'Display': '13.3" Retina', 'Processor': 'Apple M1', 'RAM': '8GB / 16GB', 'Storage': '256GB to 2TB', 'Weight': '2.8 lbs' } },
        // Dell
        { name: 'Dell XPS 16', image: '/images/dell-xps-16.webp', badge: 'Windows', specs: ['Intel Core Ultra 9', 'NVIDIA RTX 4070', 'Up to 64GB RAM', '4K OLED Touch'], fullSpecs: { 'Display': '16.3" FHD+ or 4K OLED Touch', 'Processor': 'Intel Core Ultra 7/9', 'RAM': 'Up to 64GB LPDDR5x', 'GPU': 'NVIDIA RTX 4050/4060/4070' } },
        { name: 'Dell XPS 15', image: '/images/dell-xps-15.webp', badge: 'Windows', specs: ['Intel Core i9', 'NVIDIA RTX 4070', '64GB RAM', '4K OLED'], fullSpecs: { 'Display': '15.6" FHD+ or 3.5K OLED', 'Processor': 'Intel Core i7/i9 14th Gen', 'RAM': 'Up to 64GB DDR5', 'GPU': 'NVIDIA RTX 4050/4060/4070' } },
        { name: 'Dell XPS 13', image: '/images/dell-xps-13.webp', badge: 'Ultrabook', specs: ['Intel Core Ultra 7', '32GB RAM', '13.4" FHD+', 'Under 2.7 lbs'], fullSpecs: { 'Display': '13.4" FHD+ or 3K OLED', 'Processor': 'Intel Core Ultra 5/7', 'RAM': '16GB / 32GB LPDDR5x', 'Storage': '512GB / 1TB / 2TB' } },
        // Lenovo
        { name: 'Lenovo ThinkPad X1 Carbon G12', image: '/images/lenovo-thinkpad-x1-carbon-g12.webp', badge: 'Business', specs: ['Intel Core Ultra 7', '32GB RAM', 'Military Grade', '2.48 lbs'], fullSpecs: { 'Display': '14" WUXGA or 2.8K OLED', 'Processor': 'Intel Core Ultra 5/7', 'RAM': 'Up to 64GB LPDDR5', 'Weight': 'From 2.48 lbs' } },
        { name: 'Lenovo ThinkPad T14s', image: '/images/lenovo-thinkpad-t14s.webp', badge: 'Business', specs: ['AMD Ryzen 7 Pro', '32GB RAM', '14" 2.8K OLED', 'All-Day Battery'], fullSpecs: { 'Display': '14" WUXGA or 2.8K OLED', 'Processor': 'AMD Ryzen 5/7 Pro 7000', 'RAM': 'Up to 32GB LPDDR5', 'Storage': 'Up to 1TB PCIe 4.0' } },
        { name: 'Lenovo IdeaPad Slim 5', image: '/images/lenovo-ideapad-slim-5.webp', badge: 'Budget', specs: ['AMD Ryzen 7', '16GB RAM', '16" 2.5K Display', 'Good Value'], fullSpecs: { 'Display': '16" WUXGA or 2.5K IPS', 'Processor': 'AMD Ryzen 5/7 7000', 'RAM': '8GB / 16GB', 'Storage': '256GB / 512GB / 1TB SSD' } },
        // HP
        { name: 'HP Spectre x360 16', image: '/images/hp-pavilion-15.webp', badge: 'Premium', specs: ['Intel Core Ultra 7', 'NVIDIA RTX 4050', '3K+ OLED Touch', '2-in-1'], fullSpecs: { 'Display': '16" 3K+ OLED Touch', 'Processor': 'Intel Core Ultra 7', 'RAM': '16GB / 32GB LPDDR5x', 'GPU': 'NVIDIA RTX 4050' } },
        { name: 'HP Pavilion 15', image: '/images/hp-pavilion-15.webp', badge: 'Budget', specs: ['Intel Core i5', '16GB RAM', 'Full HD Display', 'Good Value'], fullSpecs: { 'Display': '15.6" FHD', 'Processor': 'Intel Core i5 13th Gen', 'RAM': '8GB / 16GB', 'Storage': '256GB / 512GB SSD', 'GPU': 'Intel Iris Xe' } }
    ],
    tablets: [
        // iPad Pro
        { name: 'iPad Pro 13" M4', image: '/images/ipad-pro-13-m4.webp', badge: 'Latest', specs: ['M4 Chip', 'Ultra Retina XDR OLED', 'Thinnest Ever', 'Thunderbolt'], fullSpecs: { 'Display': '13" Ultra Retina XDR OLED', 'Processor': 'Apple M4', 'RAM': '8GB / 16GB', 'Storage': '256GB to 2TB', 'Thickness': '5.1mm' } },
        { name: 'iPad Pro 11" M4', image: '/images/ipad-pro-13-m4.webp', badge: 'Latest', specs: ['M4 Chip', 'Ultra Retina XDR', 'Apple Pencil Pro', 'Wi-Fi 6E'], fullSpecs: { 'Display': '11" Ultra Retina XDR OLED', 'Processor': 'Apple M4', 'RAM': '8GB / 16GB', 'Storage': '256GB to 2TB' } },
        // iPad Air
        { name: 'iPad Air 13" M2', image: '/images/ipad-air-11-m2.webp', badge: 'Popular', specs: ['M2 Chip', '13" Liquid Retina', 'Apple Pencil Pro', 'USB-C'], fullSpecs: { 'Display': '13" Liquid Retina IPS', 'Processor': 'Apple M2', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        { name: 'iPad Air 11" M2', image: '/images/ipad-air-11-m2.webp', badge: 'Popular', specs: ['M2 Chip', 'Versatile', 'Touch ID', 'USB-C'], fullSpecs: { 'Display': '11" Liquid Retina', 'Processor': 'Apple M2', 'RAM': '8GB', 'Storage': '128GB / 256GB / 512GB / 1TB' } },
        // iPad Standard
        { name: 'iPad 10th Gen', image: '/images/ipad-10th-gen.webp', badge: 'Value', specs: ['A14 Bionic', '10.9" Display', 'USB-C', 'All-Day Battery'], fullSpecs: { 'Display': '10.9" Liquid Retina', 'Processor': 'A14 Bionic', 'RAM': '4GB', 'Storage': '64GB / 256GB' } },
        { name: 'iPad 9th Gen', image: '/images/ipad-9th-gen.webp', badge: 'Budget', specs: ['A13 Bionic', 'Touch ID', 'Lightning Port', 'Great Value'], fullSpecs: { 'Display': '10.2" Retina', 'Processor': 'A13 Bionic', 'RAM': '3GB', 'Storage': '64GB / 256GB' } },
        // iPad Mini
        { name: 'iPad Mini (6th Gen)', image: '/images/ipad-mini-6th-gen.webp', badge: 'Compact', specs: ['A15 Bionic', '8.3" Liquid Retina', 'USB-C', 'Apple Pencil 2'], fullSpecs: { 'Display': '8.3" Liquid Retina', 'Processor': 'A15 Bionic', 'RAM': '4GB', 'Storage': '64GB / 256GB' } },
        // Samsung Tablets
        { name: 'Samsung Galaxy Tab S9 Ultra', image: '/images/samsung-galaxy-tab-s9.webp', badge: 'Android', specs: ['Snapdragon 8 Gen 2', '14.6" Display', 'S Pen', '12GB RAM'], fullSpecs: { 'Display': '14.6" Dynamic AMOLED 2X', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '12GB / 16GB', 'Storage': '256GB / 512GB / 1TB', 'Battery': '11200mAh' } },
        { name: 'Samsung Galaxy Tab S9', image: '/images/samsung-galaxy-tab-s9.webp', badge: 'Android', specs: ['Snapdragon 8 Gen 2', '120Hz Display', 'S Pen Included', 'DeX Mode'], fullSpecs: { 'Display': '11" Dynamic AMOLED 2X', 'Processor': 'Snapdragon 8 Gen 2', 'RAM': '8GB / 12GB', 'Storage': '128GB / 256GB', 'Battery': '8400mAh' } },
        { name: 'Samsung Galaxy Tab S9 FE', image: '/images/samsung-galaxy-tab-s9-fe.webp', badge: 'Value', specs: ['Exynos 1380', '10.9" LCD 90Hz', 'S Pen Included', 'IP68'], fullSpecs: { 'Display': '10.9" TFT LCD 90Hz', 'Processor': 'Exynos 1380', 'RAM': '6GB / 8GB', 'Storage': '128GB / 256GB', 'Battery': '8000mAh' } },
        { name: 'Samsung Galaxy Tab A9+', image: '/images/samsung-galaxy-tab-a9+.webp', badge: 'Budget', specs: ['Snapdragon 695', '90Hz Display', 'Quad Speakers', 'Great Value'], fullSpecs: { 'Display': '11" LCD 90Hz', 'Processor': 'Snapdragon 695', 'RAM': '4GB / 8GB', 'Storage': '64GB / 128GB', 'Battery': '7040mAh' } }
    ],
    smartwatches: [
        { name: 'Apple Watch Ultra 2', image: '/images/apple-watch-ultra-2.webp', badge: 'Rugged', specs: ['49mm Titanium', 'Action Button', '100m Water', '36hr Battery'], fullSpecs: { 'Display': '49mm Retina LTPO OLED', 'Processor': 'S9 SiP', 'Storage': '64GB', 'Water Resistance': '100 meters', 'Battery': 'Up to 36 hours' } },
        { name: 'Apple Watch Series 10', image: '/images/apple-watch-series-10.webp', badge: 'Latest', specs: ['Thinnest Design', 'S10 Chip', 'Sleep Apnea', 'Fast Charging'], fullSpecs: { 'Display': '42mm or 46mm LTPO OLED', 'Processor': 'S10 SiP', 'Storage': '64GB', 'Health': 'ECG, Blood Oxygen, Sleep Apnea' } },
        { name: 'Apple Watch Series 9', image: '/images/apple-watch-series-9.webp', badge: 'Popular', specs: ['S9 SiP', 'Double Tap', 'Always-On Retina', 'GPS + Cellular'], fullSpecs: { 'Display': '41mm or 45mm Retina LTPO OLED', 'Processor': 'S9 SiP', 'Storage': '64GB', 'Health': 'ECG, Blood Oxygen, Temperature' } },
        { name: 'Apple Watch SE (2nd Gen)', image: '/images/apple-watch-se-2nd-gen.webp', badge: 'Value', specs: ['S8 Chip', 'Crash Detection', 'Fitness Tracking', 'Great Battery'], fullSpecs: { 'Display': '40mm or 44mm Retina OLED', 'Processor': 'S8 SiP', 'Storage': '32GB', 'Battery': 'Up to 18 hours' } },
        { name: 'Samsung Galaxy Watch Ultra', image: '/images/samsung-galaxy-watch-ultra.webp', badge: 'Android', specs: ['Exynos W1000', 'Titanium Grade 4', '10ATM Water', 'Quick Button'], fullSpecs: { 'Display': '1.47" Super AMOLED', 'Processor': 'Exynos W1000', 'RAM': '2GB', 'Storage': '32GB', 'Battery': 'Up to 60 hours' } },
        { name: 'Samsung Galaxy Watch 7', image: '/images/samsung-galaxy-watch-7.webp', badge: 'Android', specs: ['Wear OS 5', 'Advanced Sleep', 'Sapphire Crystal', 'GPS'], fullSpecs: { 'Display': '1.3" or 1.5" Super AMOLED', 'Processor': 'Exynos W1000', 'RAM': '2GB', 'Storage': '32GB' } },
        { name: 'Samsung Galaxy Watch 6', image: '/images/samsung-galaxy-watch-6.webp', badge: 'Value', specs: ['Exynos W930', 'Wear OS 4', 'BioActive Sensor', 'Sapphire Crystal'], fullSpecs: { 'Display': '1.3" or 1.5" Super AMOLED', 'Processor': 'Exynos W930', 'RAM': '2GB', 'Storage': '16GB' } }
    ],
    airpods: [
        { name: 'AirPods Pro 2 (USB-C)', image: '/images/airpods-pro-2-usb-c.webp', badge: 'Premium', specs: ['Active Noise Cancel', 'Adaptive Audio', 'USB-C Case', 'H2 Chip'], fullSpecs: { 'Chip': 'Apple H2', 'Battery': '6 hours (30 with case)', 'Charging': 'USB-C, MagSafe, Qi', 'Features': 'ANC, Transparency, Adaptive, Conversation Awareness', 'Water Resistance': 'IPX4' } },
        { name: 'AirPods 4 with ANC', image: '/images/airpods-4-with-anc.webp', badge: 'Latest', specs: ['Active Noise Cancel', 'H2 Chip', 'USB-C Case', 'Spatial Audio'], fullSpecs: { 'Chip': 'Apple H2', 'Battery': '5 hours (20 with case)', 'Charging': 'USB-C, Wireless', 'Features': 'ANC, Personalized Spatial Audio' } },
        { name: 'AirPods 4', image: '/images/airpods-4.webp', badge: 'Latest', specs: ['H2 Chip', 'USB-C Case', 'Personalized Spatial', 'Adaptive EQ'], fullSpecs: { 'Chip': 'Apple H2', 'Battery': '5 hours (20 with case)', 'Charging': 'USB-C', 'Features': 'Personalized Spatial Audio, Adaptive EQ' } },
        { name: 'AirPods 3rd Gen', image: '/images/airpods-pro-3.webp', badge: 'Value', specs: ['Spatial Audio', 'Adaptive EQ', 'MagSafe Case', 'Sweat Resistant'], fullSpecs: { 'Chip': 'Apple H1', 'Battery': '6 hours (30 with case)', 'Charging': 'Lightning or MagSafe', 'Features': 'Spatial Audio, Adaptive EQ', 'Water Resistance': 'IPX4' } },
        { name: 'AirPods Max (USB-C)', image: '/images/airpods-max-usb-c.webp', badge: 'Premium', specs: ['Over-Ear', 'H2 Chip', '20hr Battery', 'USB-C'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Chip': 'Apple H2', 'Battery': '20 hours with ANC', 'Charging': 'USB-C', 'Features': 'ANC, Transparency, Adaptive Audio, Spatial Audio' } },
        { name: 'AirPods Max (Lightning)', image: '/images/airpods-max-lightning.webp', badge: 'Value', specs: ['Over-Ear', 'H1 Chip', '20hr Battery', 'Premium Build'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Chip': 'Apple H1', 'Battery': '20 hours with ANC', 'Charging': 'Lightning', 'Features': 'ANC, Transparency, Spatial Audio' } },
        { name: 'AirPods 2nd Gen', image: '/images/airpods-2nd-gen.webp', badge: 'Budget', specs: ['H1 Chip', 'Lightning Case', '5hr Battery', 'Hey Siri'], fullSpecs: { 'Chip': 'Apple H1', 'Battery': '5 hours (24 with case)', 'Charging': 'Lightning', 'Features': 'Hey Siri, Quick Connect' } },
        { name: 'Beats Studio Pro', image: '/images/airpods-max-usb-c.webp', badge: 'Beats', specs: ['Custom Acoustic', 'ANC + Transparency', 'USB-C', '40hr Battery'], fullSpecs: { 'Driver': 'Custom 40mm', 'Battery': '40 hours', 'Charging': 'USB-C, Fast Fuel', 'Features': 'ANC, Transparency, Spatial Audio, Works with Android + Apple' } },
        { name: 'Sony WH-1000XM5', image: '/images/sony-wh-1000xm5.webp', badge: 'Sony', specs: ['Industry-Leading ANC', '30hr Battery', 'Multipoint', 'Hi-Res Audio'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Driver': '30mm Carbon Fiber', 'Battery': '30 hours with ANC', 'Charging': 'USB-C, 3min quick charge = 3hrs', 'Features': 'ANC, Ambient Sound, Speak-to-Chat, Multipoint, LDAC', 'Weight': '250g' } },
        { name: 'Sony WH-1000XM4', image: '/images/sony-wh-1000xm4.webp', badge: 'Sony', specs: ['Premium ANC', '30hr Battery', 'Touch Controls', 'LDAC Codec'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Driver': '40mm', 'Battery': '30 hours with ANC', 'Charging': 'USB-C, 10min quick charge = 5hrs', 'Features': 'ANC, Ambient Sound, Speak-to-Chat, Multipoint, LDAC', 'Weight': '254g' } },
        { name: 'Bose QuietComfort Ultra', image: '/images/bose-quietcomfort-ultra.webp', badge: 'Bose', specs: ['Immersive Audio', 'CustomTune ANC', 'USB-C', '24hr Battery'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Battery': '24 hours', 'Charging': 'USB-C', 'Features': 'Bose Immersive Audio, CustomTune ANC, Aware Mode, Multipoint', 'Weight': '250g' } },
        { name: 'Bose QuietComfort Headphones', image: '/images/bose-quietcomfort-headphones.webp', badge: 'Bose', specs: ['Legendary ANC', '24hr Battery', 'Adjustable EQ', 'Lightweight'], fullSpecs: { 'Type': 'Over-Ear Headphones', 'Battery': '24 hours', 'Charging': 'USB-C', 'Features': 'Quiet Mode, Aware Mode, Adjustable EQ, Multipoint, Bluetooth 5.3', 'Weight': '236g' } }
    ],
    'iphone-lot': [
        { name: 'iPhone Premium Lot (12-16 Series)', image: '/images/iphone-premium-lot-12-16-series.webp', badge: 'Bundle', specs: ['iPhone 12-16 Models', 'Grade AA+ to A+', 'Bulk Pricing', 'Manifest Provided'], fullSpecs: { 'Contents': 'iPhone 12, 13, 14, 15, 16 series mix', 'Grades': 'AA+ and A+ grades', 'Pricing': 'Premium volume discounts', 'Condition': 'Fully tested, manifest provided' } },
        { name: 'iPhone Mixed Lot (11-15 Series)', image: '/images/iphone-mixed-lot-11-15-series.webp', badge: 'Bundle', specs: ['iPhone 11-15 Models', 'Mixed Grades A to B+', 'Deep Discounts', 'As-Is Sale'], fullSpecs: { 'Contents': 'iPhone 11, 12, 13, 14, 15 series', 'Grades': 'Mix of A to B+ grades', 'Pricing': 'Volume discounts available', 'Condition': 'Sold as-is, manifest provided' } },
        { name: 'iPhone Budget Lot (11-13 Series)', image: '/images/iphone-mixed-lot-11-15-series.webp', badge: 'Clearance', specs: ['iPhone 11-13 Models', 'Grade B to C', 'Maximum Savings', 'Parts/Repair OK'], fullSpecs: { 'Contents': 'iPhone 11, 12, 13 series', 'Grades': 'B and C grades', 'Pricing': 'Maximum discount pricing', 'Condition': 'Some may need repair, manifest provided' } }
    ],
    'android-lot': [
        { name: 'Samsung Premium Bundle', image: '/images/samsung-premium-bundle.webp', badge: 'Bundle', specs: ['Galaxy S22-S24', 'Grade A+ to AA+', 'Samsung Only', 'Manifest Included'], fullSpecs: { 'Brands': 'Samsung Galaxy S-Series', 'Grades': 'AA+ and A+ grades', 'Models': 'S22, S23, S24 series mix', 'Discount': 'Up to 35% off retail equivalent' } },
        { name: 'Android Mixed Lot', image: '/images/android-mixed-lot.webp', badge: 'Clearance', specs: ['Samsung & Google & OnePlus', 'Grade A-B', 'International Ready', 'Deep Discounts'], fullSpecs: { 'Brands': 'Samsung, Google, OnePlus, Motorola', 'Grades': 'Primarily A and B grades', 'Discount': 'Up to 40% off retail equivalent' } },
        { name: 'Google Pixel Bundle', image: '/images/samsung-premium-bundle1.webp', badge: 'Bundle', specs: ['Pixel 7-9 Series', 'Grade A to A+', 'Google Only', 'Clean Android'], fullSpecs: { 'Brands': 'Google Pixel Only', 'Grades': 'A and A+ grades', 'Models': 'Pixel 7, 7a, 8, 8a, 9 mix', 'Discount': 'Up to 30% off retail' } }
    ]
};

const reviewsData = [
    { name: 'Abdullah K.', rating: 5, text: 'Excellent quality devices! The iPhone I received was in pristine condition, exactly as described. Battery health was at 92% and everything works perfectly.', product: 'iPhone 15 Pro 256GB - Natural Titanium', image: '/images/Abdullah-K.webp' },
    { name: 'Shahrukh M.', rating: 5, text: 'Amazing experience from start to finish. The MacBook Air arrived well-packaged and in perfect working condition. Great value for a refurbished device.', product: 'MacBook Air 13" M1 - Space Gray - 256GB', image: '/images/Shahrukh-M.webp' },
    { name: 'Mohammed A.', rating: 5, text: 'This is my third order and every time the quality has exceeded expectations. The Galaxy Tab came with all accessories and looked brand new.', product: 'Samsung Galaxy Tab S9 - 128GB - Graphite', image: '/images/Mohammed-A.webp' },
    { name: 'Fatima R.', rating: 5, text: 'Very satisfied with my Apple Watch purchase. Arrived quickly, well protected, and in excellent condition. All features work flawlessly.', product: 'Apple Watch Series 9 - 45mm - Midnight', image: '/images/Fatima-R.webp' }
];

const gradingData = [
    { grade: 'AA+', title: 'Like New Condition', subtitle: 'Fully Functional · 14 Day Return', features: ['Pristine cosmetic condition', 'All functions tested and working', '70%+ battery health', 'No scratches or damage', '14-day buyer protection', 'Premium resale value'] },
    { grade: 'A+', title: 'Light Wear & Tear', subtitle: 'Fully Functional', features: ['Light cosmetic scratches', 'All functions working perfectly', '70%+ battery health', 'Minor wear on housing', 'Excellent resale condition', 'Best value option'] },
    { grade: 'A', title: 'Light Wear & Tear', subtitle: 'Partially Functional', features: ['Light cosmetic wear', 'Core functions working', 'Some features may not work', 'Good for parts or repair', 'Budget-friendly option', 'Manifest details provided'] },
    { grade: 'B+', title: 'Moderate Wear', subtitle: 'Fully Functional', features: ['Visible scratches/wear', 'All functions working', 'May have minor dents', 'Chips/cracks on body only', 'Screen intact and working', 'Value resale option'] },
    { grade: 'B', title: 'Moderate Wear', subtitle: 'Partially Functional', features: ['Heavy cosmetic wear', 'Screen may have minor burn-in', 'Body has chips/dents/cracks', 'Core functions working', 'Repair or parts inventory', 'Deep discount pricing'] },
    { grade: 'C/RR', title: 'Heavy Damage', subtitle: 'For Parts/Repair', features: ['Screen cracks or major burn-in', 'Warped/bent body possible', 'Missing components possible', 'Limited/no functionality', 'Parts harvesting inventory', 'Maximum discount pricing'] }
];

const faqData = [
    { question: 'How does the wholesale purchasing process work?', answer: 'Simply browse our inventory, select the products and quantities you need, and submit a quote request. We\'ll provide a detailed quote within 24 hours including product costs, shipping, and our commission. Once approved, you pay upfront and we handle everything from bidding to international delivery.' },
    { question: 'What is your pricing model?', answer: 'We operate on a zero capital risk commission model. You pay the full amount upfront (stock cost + our commission + shipping). We source the products from verified liquidation auctions and handle all logistics. There are no hidden fees or minimum order requirements.' },
    { question: 'Which countries do you ship to?', answer: 'We primarily serve the UAE and Asian markets including Singapore, Hong Kong, Malaysia, Thailand, and more. We handle all international shipping logistics and documentation. Contact us for specific country availability.' },
    { question: 'What grades of products do you offer?', answer: 'We offer all grades from AA+ (Like New) to C/RR (For Parts). Each grade is clearly defined with specific cosmetic and functional criteria. Higher grades command premium resale value, while lower grades offer deeper discounts for repair shops or parts dealers.' },
    { question: 'Do you offer warranties or returns?', answer: 'We do not offer returns. All items are sold as-is with detailed manifests provided. We ensure complete transparency about the condition of every unit before purchase.' },
    { question: 'How quickly can you fulfill orders?', answer: 'Typical turnaround from order confirmation to delivery is 2-4 weeks, depending on auction availability and destination. We provide tracking and regular updates throughout the process.' },
    { question: 'Can I order mixed lots with different models?', answer: 'Yes! We specialize in both specific model orders and mixed lots. Our wholesale bundles often provide the best value for resellers looking for variety. Check our iPhone Mixed Lot and Android Wholesale Bundle categories.' },
    { question: 'How do I contact you for urgent inquiries?', answer: 'For immediate assistance, use our WhatsApp button available on every page. You can also email us at info@voltlot.com or submit a quote request form. We respond to all inquiries within 24 hours.' }
];

// ===== UTILITIES =====
function escapeAttr(str) {
    return str.replace(/&/g,'&amp;').replace(/'/g,'&#39;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ===== STATE =====
let currentSlide = 0;
let carouselInterval;
let currentCategory = 'iphone';
let currentSeries = 'all';

// ===== SERIES DEFINITIONS =====
const seriesMap = {
    iphone: [
        { key: 'all', label: 'All iPhones' },
        { key: '16', label: 'iPhone 16', match: 'iPhone 16' },
        { key: '15', label: 'iPhone 15', match: 'iPhone 15' },
        { key: '14', label: 'iPhone 14', match: 'iPhone 14' },
        { key: '13', label: 'iPhone 13', match: 'iPhone 13' },
        { key: '12', label: 'iPhone 12', match: 'iPhone 12' },
        { key: '11', label: 'iPhone 11', match: 'iPhone 11' },
        { key: 'se', label: 'iPhone SE', match: 'iPhone SE' },
    ],
    android: [
        { key: 'all', label: 'All Android' },
        { key: 's24', label: 'Galaxy S24', match: 'S24' },
        { key: 's23', label: 'Galaxy S23', match: 'S23' },
        { key: 's22', label: 'Galaxy S22', match: 'S22' },
        { key: 'a-series', label: 'Galaxy A', match: 'Galaxy A' },
        { key: 'pixel', label: 'Google Pixel', match: 'Pixel' },
        { key: 'oneplus', label: 'OnePlus', match: 'OnePlus' },
        { key: 'fold', label: 'Foldables', match: 'Z F' },
    ],
    laptops: [
        { key: 'all', label: 'All Laptops' },
        { key: 'macbook-pro', label: 'MacBook Pro', match: 'MacBook Pro' },
        { key: 'macbook-air', label: 'MacBook Air', match: 'MacBook Air' },
        { key: 'dell', label: 'Dell', match: 'Dell' },
        { key: 'lenovo', label: 'Lenovo', match: 'Lenovo' },
        { key: 'hp', label: 'HP', match: 'HP' },
    ],
    tablets: [
        { key: 'all', label: 'All Tablets' },
        { key: 'ipad-pro', label: 'iPad Pro', match: 'iPad Pro' },
        { key: 'ipad-air', label: 'iPad Air', match: 'iPad Air' },
        { key: 'ipad', label: 'iPad', match: 'iPad 1|iPad 9' },
        { key: 'ipad-mini', label: 'iPad Mini', match: 'iPad Mini' },
        { key: 'samsung-tab', label: 'Samsung Tab', match: 'Galaxy Tab' },
    ],
    smartwatches: [
        { key: 'all', label: 'All Watches' },
        { key: 'apple', label: 'Apple Watch', match: 'Apple Watch' },
        { key: 'samsung', label: 'Galaxy Watch', match: 'Galaxy Watch' },
    ],
    airpods: [
        { key: 'all', label: 'All Audio' },
        { key: 'pro', label: 'AirPods Pro', match: 'AirPods Pro' },
        { key: 'airpods', label: 'AirPods', match: 'AirPods 4|AirPods 3|AirPods 2' },
        { key: 'max', label: 'Over-Ear Apple', match: 'Max|Beats' },
        { key: 'sony', label: 'Sony', match: 'Sony' },
        { key: 'bose', label: 'Bose', match: 'Bose' },
    ],
};

// ===== CAROUSEL =====
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.getElementById('carouselDots');
    
    track.innerHTML = carouselSlides.map((slide, i) => `
        <div class="carousel-slide" style="background: ${slide.bg}">
            <div class="slide-content">
                <div class="slide-text">
                    <p class="subtitle">${slide.subtitle}</p>
                    <h1>${slide.title}</h1>
                    <p class="description">${slide.description}</p>
                    <div class="slide-actions">
                        <a href="https://wa.me/TODO_WHATSAPP_NUMBER" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                            <span class="material-symbols-rounded">chat</span> WhatsApp Now
                        </a>
                        <a href="#quote" class="btn btn-primary">
                            <span class="material-symbols-rounded">request_quote</span> Get Quote
                        </a>
                    </div>
                </div>
                <div class="slide-image" onclick="filterProducts('${slide.category}')">
                    <img src="${slide.image}" alt="${slide.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
                </div>
            </div>
        </div>
    `).join('');

    dots.innerHTML = carouselSlides.map((_, i) => 
        `<div class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`
    ).join('');

    startCarousel();
}

function changeSlide(dir) {
    clearInterval(carouselInterval);
    currentSlide = (currentSlide + dir + carouselSlides.length) % carouselSlides.length;
    updateCarousel();
    startCarousel();
}

function goToSlide(i) {
    clearInterval(carouselInterval);
    currentSlide = i;
    updateCarousel();
    startCarousel();
}

function updateCarousel() {
    document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function startCarousel() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        updateCarousel();
    }, 6000);
}

// ===== GENERATORS =====
function generateCategories() {
    document.getElementById('categoryGrid').innerHTML = categories.map(cat => `
        <div class="category-image-card" role="button" tabindex="0" onclick="filterProducts('${cat.key}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();filterProducts('${cat.key}')}">
            <div class="category-img-wrapper">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            </div>
            <div class="category-info">
                <h3>${cat.name}</h3>
                <p class="category-desc">${cat.description}</p>
            </div>
        </div>
    `).join('');
}

function generateCategoryTabs() {
    document.getElementById('categoryTabs').innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat.key === currentCategory ? 'active' : ''}" onclick="filterProducts('${cat.key}')">
            <img class="tab-img" src="${cat.image}" alt="${cat.name}" loading="lazy">
            <span>${cat.name}</span>
        </button>
    `).join('');
}

let filteredProductIndices = [];

function generateProducts() {
    const grid = document.getElementById('productGrid');
    const showcase = document.getElementById('showcaseImage');
    const seriesContainer = document.getElementById('seriesFilter');
    const allProducts = productDatabase[currentCategory] || [];
    
    const catImages = {
        'iphone': '/images/products-banner.webp',
        'android': '/images/products-banner.webp',
        'laptops': '/images/products-banner.webp',
        'tablets': '/images/products-banner.webp',
        'smartwatches': '/images/products-banner.webp',
        'airpods': '/images/products-banner.webp',
        'iphone-lot': '/images/products-banner.webp',
        'android-lot': '/images/products-banner.webp'
    };
    
    showcase.innerHTML = `<img src="${catImages[currentCategory]}" alt="${currentCategory}" loading="lazy">`;

    // Generate series chips
    const series = seriesMap[currentCategory];
    if (series && series.length > 2) {
        seriesContainer.innerHTML = series.map(s => {
            const count = s.key === 'all' ? allProducts.length : allProducts.filter(p => new RegExp(s.match, 'i').test(p.name)).length;
            if (s.key !== 'all' && count === 0) return '';
            return `<button class="series-chip ${currentSeries === s.key ? 'active' : ''}" onclick="filterSeries('${s.key}')">
                ${s.label}<span class="chip-count">${count}</span>
            </button>`;
        }).join('');
    } else {
        seriesContainer.innerHTML = '';
    }

    // Filter products by series
    let products;
    if (currentSeries === 'all' || !series) {
        products = allProducts.map((p, i) => ({ ...p, originalIndex: i }));
    } else {
        const activeSeries = series.find(s => s.key === currentSeries);
        if (activeSeries && activeSeries.match) {
            const regex = new RegExp(activeSeries.match, 'i');
            products = allProducts
                .map((p, i) => ({ ...p, originalIndex: i }))
                .filter(p => regex.test(p.name));
        } else {
            products = allProducts.map((p, i) => ({ ...p, originalIndex: i }));
        }
    }

    filteredProductIndices = products.map(p => p.originalIndex);
    
    grid.innerHTML = products.map((p, fi) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <ul class="product-specs">
                    ${p.specs.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <div class="product-actions">
                    <button class="btn-details" onclick="showProductDetails(${p.originalIndex})">
                        <span class="material-symbols-rounded" style="font-size:1rem">info</span> Details
                    </button>
                    <button class="btn-quote" onclick="requestQuoteFor('${escapeAttr(p.name)}')">
                        <span class="material-symbols-rounded" style="font-size:1rem">request_quote</span> Quote
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Reset scroll position
    document.querySelector('.products-scroll').scrollLeft = 0;
}

function filterSeries(seriesKey) {
    currentSeries = seriesKey;
    generateProducts();
}

function generateReviews() {
    document.getElementById('reviewsGrid').innerHTML = reviewsData.map(r => `
        <div class="review-card">
            <div class="review-image">
                <img src="${r.image}" alt="${r.name}'s review" loading="lazy">
            </div>
            <div class="review-content">
                <div class="review-header">
                    <span class="reviewer-name">${r.name}</span>
                    <div class="review-stars">${'★'.repeat(r.rating)}</div>
                </div>
                <p class="review-text">${r.text}</p>
                <p class="review-product">${r.product}</p>
            </div>
        </div>
    `).join('');
}

function generateGrading() {
    document.getElementById('gradeGrid').innerHTML = gradingData.map(g => `
        <div class="grade-card">
            <div class="grade-header">
                <div class="grade-badge">${g.grade}</div>
                <div class="grade-title">
                    <h3>${g.title}</h3>
                    <p class="grade-subtitle">${g.subtitle}</p>
                </div>
            </div>
            <ul class="grade-features">
                ${g.features.map(f => `
                    <li>
                        <span class="material-symbols-rounded">check_circle</span>
                        ${f}
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function generateFAQ() {
    document.getElementById('faqList').innerHTML = faqData.map((faq, i) => `
        <div class="faq-item" role="button" tabindex="0" onclick="toggleFAQ(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleFAQ(${i})}" aria-expanded="false">
            <div class="faq-question">
                ${faq.question}
                <span class="material-symbols-rounded faq-icon">expand_more</span>
            </div>
            <div class="faq-answer"><p>${faq.answer}</p></div>
        </div>
    `).join('');
}

// ===== INTERACTIONS =====
function toggleFAQ(i) {
    const item = document.querySelectorAll('.faq-item')[i];
    item.classList.toggle('active');
    item.setAttribute('aria-expanded', item.classList.contains('active'));
}

function filterProducts(cat) {
    currentCategory = cat;
    currentSeries = 'all';
    generateCategoryTabs();
    generateProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollProducts(dir) {
    const container = document.querySelector('.products-scroll');
    container.scrollLeft += dir === 'left' ? -320 : 320;
}

function showProductDetails(index) {
    const product = productDatabase[currentCategory][index];
    const modal = document.getElementById('productModal');
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalBody').innerHTML = `
        <ul class="spec-list">
            ${Object.entries(product.fullSpecs).map(([k, v]) => `
                <li><span class="spec-label">${k}</span><span class="spec-value">${v}</span></li>
            `).join('')}
        </ul>
        <div style="margin-top:1.5rem">
            <button class="btn btn-primary" style="width:100%;justify-content:center;padding:0.75rem" onclick="requestQuoteFor('${escapeAttr(product.name)}'); closeModal();">
                <span class="material-symbols-rounded">request_quote</span>
                Request Quote for ${escapeAttr(product.name)}
            </button>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function requestQuoteFor(name) {
    const cat = document.getElementById('quoteCategory');
    const model = document.getElementById('model');
    if (cat) cat.value = currentCategory;
    if (model) model.value = name;
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    const icon = document.querySelector('.mobile-menu-btn .material-symbols-rounded');
    menu.classList.toggle('mobile-open');
    icon.textContent = menu.classList.contains('mobile-open') ? 'close' : 'menu';
}

function closeMobileMenu() {
    const menu = document.getElementById('navMenu');
    const icon = document.querySelector('.mobile-menu-btn .material-symbols-rounded');
    menu.classList.remove('mobile-open');
    if (icon) icon.textContent = 'menu';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    generateCategories();
    generateCategoryTabs();
    generateProducts();
    generateReviews();
    generateGrading();
    generateFAQ();
});

// Form — submits to /api/quote serverless function
document.getElementById('quoteForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.submit-btn');
    const originalHTML = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:1.15rem;animation:spin 1s linear infinite">progress_activity</span> Sending...';

    try {
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            this.style.display = 'none';
            document.getElementById('formSuccess').classList.add('active');
            this.reset();
        } else {
            throw new Error(result.error || 'Failed to send');
        }
    } catch (err) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'background:#fef2f2;color:#991b1b;padding:0.75rem 1rem;border-radius:8px;margin-top:1rem;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;';
        errorDiv.innerHTML = '<span class="material-symbols-rounded" style="font-size:1.1rem;color:#dc2626">error</span> Something went wrong. Please try again or contact us via WhatsApp.';
        submitBtn.parentNode.insertBefore(errorDiv, submitBtn.nextSibling);
        setTimeout(() => errorDiv.remove(), 6000);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }
});

function resetQuoteForm() {
    document.getElementById('quoteForm').style.display = '';
    document.getElementById('formSuccess').classList.remove('active');
}

// Header scroll + back to top
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

// Modal backdrop close + Escape key
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeMobileMenu(); }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Carousel touch/swipe support
(function() {
    const carousel = document.querySelector('.hero-carousel');
    let touchStartX = 0;
    let touchEndX = 0;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 1 : -1);
    });
})();

// Pause carousel on hover
const heroEl = document.querySelector('.hero-carousel');
if (heroEl) {
    heroEl.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    heroEl.addEventListener('mouseleave', () => startCarousel());
}

// Active nav link highlighting on scroll
const navSections = document.querySelectorAll('section[id]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-links li a').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links li a[href="#${entry.target.id}"]`);
                             if (activeLink) activeLink.classList.add('active');
        }
    });
}, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });
navSections.forEach(s => navObserver.observe(s));
