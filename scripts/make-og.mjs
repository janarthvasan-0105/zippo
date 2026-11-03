// Generates public/og.png (1200x630), the social share image. Run with `npm run og` after changing the art.
import sharp from 'sharp';

const W = 1200;
const H = 630;
const root = new URL('../', import.meta.url);

const background = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="0.75" cy="0.2" r="0.8">
      <stop offset="0" stop-color="#5483B3" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#021024" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#021024"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
</svg>`);

const phone = await sharp(new URL('src/assets/photos/forgotten-heiress.jpg', root).pathname.slice(1))
  .resize(300, 540, { fit: 'cover' })
  .modulate({ saturation: 0.75 })
  .composite([{ input: Buffer.from('<svg width="300" height="540"><rect width="300" height="540" rx="40" fill="#fff"/></svg>'), blend: 'dest-in' }])
  .png()
  .toBuffer();

const frame = Buffer.from(`<svg width="320" height="560" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="316" height="556" rx="48" fill="none" stroke="#5483B3" stroke-width="3"/>
</svg>`);

const text = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect x="80" y="96" width="56" height="56" rx="14" fill="#052659"/>
  <path d="M96 112h24l-22 24h22" fill="none" stroke="#C1E8FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="152" y="138" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="40" fill="#C1E8FF">zippo</text>
  <text x="80" y="290" font-family="Georgia, serif" font-weight="700" font-size="80" fill="#C1E8FF">Big drama.</text>
  <text x="80" y="380" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="80" fill="#7DA0CA">Tiny episodes.</text>
  <text x="80" y="460" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#7DA0CA">Mini dramas in one-minute episodes. Join the waitlist.</text>
</svg>`);

await sharp(background)
  .composite([
    { input: phone, left: 830, top: 45 },
    { input: frame, left: 820, top: 35 },
    { input: text, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(new URL('public/og.png', root).pathname.slice(1));

console.log('wrote public/og.png');
