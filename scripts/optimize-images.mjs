/**
 * Generates web-optimized versions of the gallery photos.
 *   - gallery/thumbs/<name>.jpg  height 600px  (carousel, incl. 2x retina)
 *   - gallery/full/<name>.jpg    max 1600px   (lightbox, loaded on click)
 * The original files are never touched. Rerun after adding photos.
 *
 * Usage: npm run optimize-images
 */
import sharp from 'sharp';
import { mkdir, stat, readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = path.resolve('src/resources/images');
const OUT_DIR = path.resolve('src/resources/images/gallery');
const BAND_OUT_DIR = path.resolve('src/resources/images/band-web');

const GALLERY_FILES = [
  'Hochzeit_2026.JPG',
  'hochzeit_2026_2.JPG',
  'maier_2025.jpg',
  'gretle_2025.jpg',
  'Hochzeit_2026_3.JPG',
  'Hochzeit_2026_4.JPG',
  'Hochzeit_2026_5.JPG',
  'Hochzeit_2026_6.JPG',
  'zamma_2024.jpg',
  'maier_2024.jpg',
  'sigle_2024.JPG',
  'maier_2023_1.jpg',
  'zamma_2022_1.jpg',
  'zamma_2022_3.jpg',
  'kelterfest.jpg',
  'kelterfest_2.jpg',
  'kelterfest_3.jpg',
];

// Band page: single web version per photo (displayed at ~400px, + retina headroom)
const BAND_FILES = [
  'band.jpg',
  'marc.jpg',
  'marcel.jpg',
  'juli.jpg',
  'max.jpg',
  'amps.jpg',
];

async function isUpToDate(input, output) {
  try {
    const inStat = await stat(input);
    const outStat = await stat(output);
    return outStat.mtimeMs > inStat.mtimeMs;
  } catch {
    return false;
  }
}

async function generateVariant(input, output, options) {
  if (await isUpToDate(input, output)) return 'skip';
  const image = sharp(input);
  if (options.height) image.resize({ height: options.height, withoutEnlargement: true });
  if (options.width) image.resize({ width: options.width, withoutEnlargement: true });
  image.rotate();
  await image.jpeg({ quality: options.quality, mozjpeg: true }).toFile(output);
  return 'ok';
}

await mkdir(path.join(OUT_DIR, 'thumbs'), { recursive: true });
await mkdir(path.join(OUT_DIR, 'full'), { recursive: true });
await mkdir(BAND_OUT_DIR, { recursive: true });

let produced = 0;
for (const file of GALLERY_FILES) {
  const input = path.join(SRC_DIR, file);
  try {
    await stat(input);
  } catch {
    console.warn(`not found, skipped: ${file}`);
    continue;
  }

  const name = path.parse(file).name.toLowerCase();
  const results = await Promise.all([
    generateVariant(input, path.join(OUT_DIR, 'thumbs', `${name}.jpg`), { height: 600, quality: 68 }),
    generateVariant(input, path.join(OUT_DIR, 'full', `${name}.jpg`), { width: 1600, quality: 80 }),
  ]);

  produced += results.filter((r) => r === 'ok').length;
  console.log(`gallery/${name}: ${results.join(', ')}`);
}

for (const file of BAND_FILES) {
  const input = path.join(SRC_DIR, file);
  try {
    await stat(input);
  } catch {
    console.warn(`not found, skipped: ${file}`);
    continue;
  }

  const name = path.parse(file).name.toLowerCase();
  const result = await generateVariant(input, path.join(BAND_OUT_DIR, `${name}.jpg`), { width: 1200, quality: 80 });

  produced += result === 'ok' ? 1 : 0;
  console.log(`band-web/${name}: ${result}`);
}

console.log(`\n${produced} variants (re)generated in ${path.relative(process.cwd(), OUT_DIR)}`);
