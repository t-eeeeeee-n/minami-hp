// Screenshots pages of a running site at PC (1440x900), SP (390x844) and PC with reduced motion.
//
//   node scripts/shoot.mjs [path ...] [--base http://localhost:3000] [--out doc/shots] [--full] [--wait 1500]
//
// Pages default to "/". The leading slash is optional because Git Bash rewrites "/method" into a
// Windows path before Node sees it. Files are written as <out>/<page>-<pc|sp|pc-reduced>.png.
import { mkdirSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { chromium } from 'playwright';

const root = resolve(import.meta.dirname, '..');

const args = { paths: [], base: 'http://localhost:3000', out: 'doc/shots', full: false, wait: 1500 };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const k = argv[i];
  if (k === '--base') args.base = argv[++i];
  else if (k === '--out') args.out = argv[++i];
  else if (k === '--full') args.full = true;
  else if (k === '--wait') args.wait = Number(argv[++i]);
  else if (k.startsWith('--')) throw new Error(`unknown argument: ${k}`);
  else args.paths.push(`/${k.replace(/^\/+/, '')}`);
}
if (!args.paths.length) args.paths.push('/');

const outDir = resolve(root, args.out);
if (!outDir.startsWith(root + sep)) throw new Error('--out must be inside the repository');
mkdirSync(outDir, { recursive: true });

const variants = [
  { name: 'pc', viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' },
  { name: 'sp', viewport: { width: 390, height: 844 }, reducedMotion: 'no-preference', isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  { name: 'pc-reduced', viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' },
];

// FadeIn and similar components only reveal once they intersect the viewport, so a full-page
// shot without scrolling through first comes out mostly blank.
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
  });
}

const slug = (p) => (p === '/' ? 'top' : p.replace(/^\/|\/$/g, '').replace(/[^\w-]+/g, '_'));

const browser = await chromium.launch();
const written = [];
let failed = false;
for (const p of args.paths) {
  for (const v of variants) {
    const { name, ...opts } = v;
    const ctx = await browser.newContext(opts);
    const page = await ctx.newPage();
    const url = new URL(p, args.base).href;
    try {
      const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      if (!res || !res.ok()) throw new Error(`HTTP ${res?.status()}`);
      if (args.full) await scrollThrough(page);
      await page.waitForTimeout(args.wait);
      const file = join(outDir, `${slug(p)}-${name}.png`);
      await page.screenshot({ path: file, fullPage: args.full });
      written.push(relative(root, file).split(sep).join('/'));
    } catch (e) {
      failed = true;
      console.error(`${url} (${name}): ${e.message}`);
    }
    await ctx.close();
  }
}
await browser.close();
console.log(written.join('\n'));
if (failed) process.exit(1);
