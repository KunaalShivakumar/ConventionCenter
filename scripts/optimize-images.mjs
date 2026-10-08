import { mkdir, readFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const photosDir = path.resolve('public/venue-photos');
const optimizedDir = path.join(photosDir, 'optimized');
const socialImageInput = path.join(photosDir, 'temple-entrance-steps.jpg');
const socialImageOutput = path.resolve('public/og-image.jpg');
const targetWidths = [480, 640, 960, 1280, 1600, 1920];

await rm(optimizedDir, { recursive: true, force: true });
await mkdir(optimizedDir, { recursive: true });

const files = (await readdir(photosDir)).filter(
  (file) => /\.(jpe?g|png)$/i.test(file)
);

let generatedCount = 0;

for (const file of files) {
  const input = path.join(photosDir, file);
  const imageBuffer = await readFile(input);
  const image = sharp(imageBuffer, { failOn: 'none' });
  const metadata = await image.metadata();
  const originalWidth = metadata.width;

  if (!originalWidth) continue;

  const widths = [...targetWidths.filter((width) => width < originalWidth), originalWidth];
  const stem = path.parse(file).name;

  for (const width of widths) {
    await image
      .clone()
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: width >= 1280 ? 78 : 74, effort: 6 })
      .toFile(path.join(optimizedDir, `${stem}-${width}.webp`));

    generatedCount += 1;
  }
}

await sharp(socialImageInput, { failOn: 'none' })
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 86, mozjpeg: true, progressive: true })
  .toFile(socialImageOutput);

console.log(`Generated ${generatedCount} responsive WebP images and og-image.jpg. Originals preserved.`);
