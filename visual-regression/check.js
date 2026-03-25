const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { PNG } = require('pngjs');
const pixelmatchModule = require('pixelmatch');
const pixelmatch = pixelmatchModule.default || pixelmatchModule;

const ROOT = process.cwd();
const BASE_URL = process.env.VR_BASE_URL || 'http://127.0.0.1:4173';
const BASELINE_DIR = path.join(ROOT, 'visual-regression', 'baselines');
const CURRENT_DIR = path.join(ROOT, 'visual-regression', 'current');
const DIFF_DIR = path.join(ROOT, 'visual-regression', 'diff');
const UPDATE_BASELINES = process.argv.includes('--update-baselines');

function parseNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const PIXELMATCH_THRESHOLD = parseNumber(process.env.VR_PIXELMATCH_THRESHOLD, 0.12);
const MAX_DIFF_RATIO = parseNumber(process.env.VR_MAX_DIFF_RATIO, 0.008);

const targets = [
  { name: 'home', hash: '#home' },
  { name: 'work', hash: '#work' },
  { name: 'about', hash: '#about' },
  { name: 'services', hash: '#services' },
  { name: 'tech-stack', hash: '#tech-stack' },
  { name: 'contact', hash: '#contact' }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readPng(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

function writePng(filePath, png) {
  fs.writeFileSync(filePath, PNG.sync.write(png));
}

(async () => {
  ensureDir(BASELINE_DIR);
  ensureDir(CURRENT_DIR);
  ensureDir(DIFF_DIR);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.emulateMedia({ reducedMotion: 'reduce' });

  // Keep captures deterministic by disabling motion/transitions.
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    `
  });

  let missingBaseline = false;
  let hasRegression = false;

  for (const target of targets) {
    const url = `${BASE_URL}/${target.hash}`;
    const currentPath = path.join(CURRENT_DIR, `${target.name}.png`);
    const baselinePath = path.join(BASELINE_DIR, `${target.name}.png`);
    const diffPath = path.join(DIFF_DIR, `${target.name}.png`);

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);

    const section = await page.$(target.hash);
    if (section) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
    }

    if (section) {
      await section.screenshot({ path: currentPath });
    } else {
      await page.screenshot({ path: currentPath, fullPage: false });
    }

    if (UPDATE_BASELINES || !fs.existsSync(baselinePath)) {
      fs.copyFileSync(currentPath, baselinePath);
      missingBaseline = true;
      continue;
    }

    const baseline = readPng(baselinePath);
    const current = readPng(currentPath);

    if (baseline.width !== current.width || baseline.height !== current.height) {
      hasRegression = true;
      continue;
    }

    const diff = new PNG({ width: baseline.width, height: baseline.height });
    const mismatch = pixelmatch(
      baseline.data,
      current.data,
      diff.data,
      baseline.width,
      baseline.height,
      { threshold: PIXELMATCH_THRESHOLD }
    );

    const ratio = mismatch / (baseline.width * baseline.height);
    writePng(diffPath, diff);

    if (ratio > MAX_DIFF_RATIO) {
      console.error(`Visual regression detected for ${target.name}: ${(ratio * 100).toFixed(2)}%`);
      hasRegression = true;
    }
  }

  await browser.close();

  if (UPDATE_BASELINES) {
    console.log('Baselines updated successfully.');
    process.exit(0);
  }

  if (missingBaseline) {
    console.error('Baseline images were missing. Baselines were generated in visual-regression/baselines. Commit them and re-run checks.');
    process.exit(1);
  }

  if (hasRegression) {
    console.error('Visual regression threshold exceeded. Review visual-regression/diff outputs.');
    process.exit(1);
  }

  console.log('Visual regression check passed.');
})();
