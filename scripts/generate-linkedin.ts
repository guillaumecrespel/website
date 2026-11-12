/**
 * Renders the LinkedIn kit from the site's own design and data:
 *   docs/linkedin/banniere-<lang>.png        1584×396 (×2)
 *   docs/linkedin/photo-profil.png           800×800, mint background
 *   docs/linkedin/photo-profil-creme.jpg     800×800, original photo crop
 *   docs/linkedin/selection-apps-<lang>.png  1200×627 (×2)
 *   docs/linkedin/selection-missions-<lang>.png
 *   docs/linkedin/post-lancement-<lang>.png  1080×1350
 *
 *   pnpm generate:linkedin
 *
 * Builds the templates (src/pages/og/linkedin) into a throwaway directory with
 * LINKEDIN_KIT=1, so they never ship with the site.
 */
import { execSync } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, join, normalize } from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { LINKEDIN_ASSETS, type LinkedinAsset } from '../src/lib/linkedin';

const ROOT = process.cwd();
const BUILD = join(ROOT, 'node_modules/.linkedin-kit');
const OUT = join(ROOT, 'docs/linkedin');
const LANGS = ['fr', 'en'] as const;

const FILE_NAMES: Record<LinkedinAsset, (lang: string) => string> = {
  banner: (lang) => `banniere-${lang}.png`,
  photo: () => 'photo-profil.png',
  apps: (lang) => `selection-apps-${lang}.png`,
  missions: (lang) => `selection-missions-${lang}.png`,
  post: (lang) => `post-lancement-${lang}.png`,
};

/** Device pixel ratio per format: crisp text without oversized files. */
const SCALE: Record<LinkedinAsset, number> = {
  banner: 2,
  photo: 2,
  apps: 2,
  missions: 2,
  post: 1.5,
};

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

function serve(dir: string): Promise<{ url: string; close: () => void }> {
  const server = createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname);
    let file = normalize(join(dir, pathname));
    if (!file.startsWith(dir)) {
      res.writeHead(403).end();
      return;
    }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    if (!existsSync(file)) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address() as AddressInfo;
      resolve({ url: `http://127.0.0.1:${port}`, close: () => server.close() });
    });
  });
}

async function main() {
  console.log('› Building the LinkedIn templates…');
  await rm(BUILD, { recursive: true, force: true });
  execSync(`pnpm astro build --outDir ${BUILD}`, {
    stdio: 'inherit',
    env: { ...process.env, LINKEDIN_KIT: '1' },
  });
  await mkdir(OUT, { recursive: true });

  const server = await serve(BUILD);
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    for (const lang of LANGS) {
      for (const asset of Object.keys(LINKEDIN_ASSETS) as LinkedinAsset[]) {
        if (asset === 'photo' && lang !== 'fr') continue;
        const { width, height } = LINKEDIN_ASSETS[asset];
        await page.setViewport({ width, height, deviceScaleFactor: SCALE[asset] });
        await page.goto(`${server.url}/og/linkedin/${lang}/${asset}/`, {
          waitUntil: 'networkidle0',
        });
        await page.evaluate(() => document.fonts.ready);
        const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width, height } });
        const file = join(OUT, FILE_NAMES[asset](lang));
        await sharp(png).png({ compressionLevel: 9 }).toFile(file);
        console.log(`  ✓ ${file.replace(`${ROOT}/`, '')}`);
      }
    }
    // Second option: the original photo (cream background), head and shoulders.
    await sharp(join(ROOT, 'src/assets/images/portrait.jpg'))
      .extract({ left: 200, top: 40, width: 800, height: 800 })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(join(OUT, 'photo-profil-creme.jpg'));
    console.log('  ✓ docs/linkedin/photo-profil-creme.jpg');
  } finally {
    await browser.close();
    server.close();
    await rm(BUILD, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
