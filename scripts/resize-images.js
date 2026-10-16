const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "..", "public", "images");
const targets = [
  { file: "ankush-profile.jpg", maxWidth: 1600 },
  { file: "wedding-photo.jpg", maxWidth: 1600 },
  { file: "fashion-photo.jpg", maxWidth: 1600 },
  { file: "prewedding-photo.jpg", maxWidth: 1600 },
];

(async () => {
  for (const { file, maxWidth } of targets) {
    const filePath = path.join(dir, file);
    const buffer = await sharp(filePath)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: 82 })
      .toBuffer();
    fs.writeFileSync(filePath + ".tmp", buffer);
    fs.renameSync(filePath + ".tmp", filePath);
    const meta = await sharp(filePath).metadata();
    console.log(file, meta.width, meta.height, fs.statSync(filePath).size);
  }
})();
