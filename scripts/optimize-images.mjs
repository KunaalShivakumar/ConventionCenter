import { mkdir, readFile, readdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const photosDir = path.resolve('public/venue-photos');
const tempDir = path.join(photosDir, '.optimized');
const maxWidth = 2200;
const alreadyPrepared = new Set(['hero-exterior-front.jpg']);

await mkdir(tempDir, { recursive: true });

const files = (await readdir(photosDir)).filter(
  (file) => /\.(jpe?g)$/i.test(file) && !alreadyPrepared.has(file)
);

for (const file of files) {
  const input = path.join(photosDir, file);
  const output = path.join(tempDir, file);
  const imageBuffer = await readFile(input);
  const image = sharp(imageBuffer, { failOn: 'none' });
  const metadata = await image.metadata();
  const width = metadata.width && metadata.width > maxWidth ? maxWidth : metadata.width;

  await image
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .modulate({ brightness: 1.025, saturation: 1.03 })
    .jpeg({ quality: 90, mozjpeg: true, progressive: true })
    .toFile(output);

  await rm(input);
  await rename(output, input);
}

await rm(tempDir, { recursive: true, force: true });
console.log(`Optimized ${files.length} venue photos.`);
