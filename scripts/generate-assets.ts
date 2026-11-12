/**
 * Generates the committed binary assets from the site itself:
 *   - public/cv/guillaume_crespel_cv_<lang>.pdf   (prints /<lang>/cv/)
 *   - public/og/guillaume-crespel-<lang>.png      (screenshots /og/<lang>/)
 *   - public/og/portrait.jpg                       (JSON-LD Person image)
 *
 *   pnpm generate:assets             # builds first
 *   pnpm generate:assets --no-build  # reuses the existing dist/
 *
 * The PDFs and images are committed, so the Docker build never needs Chrome.
 * Run `pnpm build` again afterwards if you want dist/ to contain them.
 */
import { execSync } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, join, normalize } from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const PUBLIC = join(ROOT, 'public');
const LANGS = ['fr', 'en'] as const;

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
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

function footer(lang: (typeof LANGS)[number]) {
  const date = new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(new Date());
  const label = lang === 'fr' ? `CV · mis à jour le ${date}` : `Resume · updated on ${date}`;
  return `
  <div style="width:100%;padding:0 14mm;font:7.5pt 'Helvetica Neue',Arial,sans-serif;color:#6b6b72;display:flex;justify-content:space-between;">
    <span>Guillaume Crespel · ${label} · guillaumecrespel.fr/${lang}/cv/</span>
    <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
  </div>`;
}

async function main() {
  if (!process.argv.includes('--no-build')) {
    console.log('› Building the site…');
    execSync('pnpm build', { stdio: 'inherit' });
  }
  if (!existsSync(DIST)) throw new Error('dist/ not found: run `pnpm build` first.');

  await mkdir(join(PUBLIC, 'cv'), { recursive: true });
  await mkdir(join(PUBLIC, 'og'), { recursive: true });

  const server = await serve(DIST);
  const browser = await puppeteer.launch({ headless: true });

  try {
    for (const lang of LANGS) {
      const page = await browser.newPage();

      console.log(`› PDF resume (${lang})`);
      await page.goto(`${server.url}/${lang}/cv/`, { waitUntil: 'networkidle0' });
      await page.emulateMediaType('print');
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({
        path: join(PUBLIC, 'cv', `guillaume_crespel_cv_${lang}.pdf`),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate: footer(lang),
        tagged: true,
        outline: true,
      });

      console.log(`› Social card (${lang})`);
      await page.emulateMediaType('screen');
      await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
      await page.goto(`${server.url}/og/${lang}/`, { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts.ready);
      const png = await page.screenshot({
        type: 'png',
        clip: { x: 0, y: 0, width: 1200, height: 630 },
      });
      await sharp(png)
        .png({ compressionLevel: 9, palette: true, quality: 92 })
        .toFile(join(PUBLIC, 'og', `guillaume-crespel-${lang}.png`));

      await page.close();
    }

    console.log('› Portrait');
    await sharp(join(ROOT, 'src/assets/images/portrait.jpg'))
      .resize(800, 800)
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(PUBLIC, 'og', 'portrait.jpg'));
  } finally {
    await browser.close();
    server.close();
  }

  console.log('✓ Assets written to public/cv and public/og');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
