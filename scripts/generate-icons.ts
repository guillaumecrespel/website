/**
 * Generates the favicon set from the portrait photo.
 *
 *   pnpm generate:icons
 *
 * Output (public/):
 *   favicon.ico            16/32/48 px, PNG-in-ICO
 *   favicon-96.png         96 px, for browsers that prefer PNG
 *   apple-touch-icon.png   180 px, opaque background (iOS ignores alpha)
 *   icon-192.png / icon-512.png        circular, transparent (manifest "any")
 *   icon-maskable-512.png  full-bleed, safe-zone padded (manifest "maskable")
 */
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SOURCE = join(ROOT, 'src/assets/images/portrait.jpg');
const OUT = join(ROOT, 'public');
const BRAND_BG = '#5EF1A5';

// Square crop centred on the face (source is 1200x1200).
const FACE = { left: 330, top: 120, width: 540, height: 540 };

// Palette quantisation keeps the large icons light; tiny ones stay true-colour.
function pngOptions(size: number) {
  return { compressionLevel: 9, effort: 10, palette: size >= 96, quality: 90 };
}

async function face(size: number) {
  return sharp(SOURCE).extract(FACE).resize(size, size).png().toBuffer();
}

async function circle(size: number) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  return sharp(await face(size))
    .composite([{ input: mask, blend: 'dest-in' }])
    .png(pngOptions(size))
    .toBuffer();
}

async function padded(size: number, ratio: number) {
  const inner = Math.round(size * ratio);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BRAND_BG },
  })
    .composite([{ input: await circle(inner), gravity: 'center' }])
    .png(pngOptions(size))
    .toBuffer();
}

/** Minimal ICO writer: one PNG payload per size (supported everywhere since Vista). */
function ico(images: { size: number; data: Buffer }[]) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries: Buffer[] = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(entry);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

async function main() {
  const icoSizes = [16, 32, 48];
  const icoImages = await Promise.all(
    icoSizes.map(async (size) => ({ size, data: await circle(size) })),
  );
  await writeFile(join(OUT, 'favicon.ico'), ico(icoImages));
  await writeFile(join(OUT, 'favicon-96.png'), await circle(96));
  await writeFile(join(OUT, 'apple-touch-icon.png'), await padded(180, 0.86));
  await writeFile(join(OUT, 'icon-192.png'), await circle(192));
  await writeFile(join(OUT, 'icon-512.png'), await circle(512));
  // Maskable icons must keep the subject inside the central 80% circle.
  await writeFile(join(OUT, 'icon-maskable-512.png'), await padded(512, 0.72));
  console.log('Icons written to public/');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
