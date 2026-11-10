const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = count * dirEntrySize;
  let offset = headerSize + dirSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += img.buffer.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.buffer)]);
}

async function run() {
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  // 1. Convert logo.png to logo.webp
  const logoPngPath = path.join(publicDir, 'logo.png');
  const logoWebpPath = path.join(publicDir, 'logo.webp');

  if (fs.existsSync(logoPngPath)) {
    await sharp(logoPngPath)
      .webp({ quality: 95, lossless: true })
      .toFile(logoWebpPath);
    console.log('✓ Successfully created public/logo.webp from logo.png');
  }

  // 2. Base icon source: prefer favicon.ico.png or icon.png
  let baseIconPath = path.join(publicDir, 'favicon.ico.png');
  if (!fs.existsSync(baseIconPath)) {
    baseIconPath = path.join(publicDir, 'icon.png');
  }

  console.log('Using base icon:', baseIconPath);

  // Generate different resolutions for favicon.ico (16, 32, 48)
  const b16 = await sharp(baseIconPath).resize(16, 16).png().toBuffer();
  const b32 = await sharp(baseIconPath).resize(32, 32).png().toBuffer();
  const b48 = await sharp(baseIconPath).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
  ]);

  // Write favicon.ico to public and src/app
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated valid multi-resolution favicon.ico in public/ and src/app/');

  // Generate 192x192, 512x512, 180x180 icons
  const icon192 = await sharp(baseIconPath).resize(192, 192).png().toBuffer();
  const icon512 = await sharp(baseIconPath).resize(512, 512).png().toBuffer();
  const iconApple = await sharp(baseIconPath).resize(180, 180).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon512);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), iconApple);

  // Also write to src/app/ so Next.js static metadata serves fresh icons
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon512);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), iconApple);
  console.log('✓ Updated icon-192.png, icon-512.png, icon.png, apple-touch-icon.png');

  // 3. Remove extra/obsolete files requested by user
  const extraFiles = [
    path.join(publicDir, 'favicon.ico.png'),
    path.join(publicDir, 'Vapes in Noida.png'),
    path.join(publicDir, 'vapes-in-noida.png'),
    path.join(publicDir, 'Vapes in Mumbai.png'),
  ];

  for (const f of extraFiles) {
    if (fs.existsSync(f)) {
      fs.unlinkSync(f);
      console.log('✓ Removed extra file:', path.basename(f));
    }
  }

  console.log('All brand assets processed successfully!');
}

run().catch((err) => {
  console.error('Error processing assets:', err);
  process.exit(1);
});

