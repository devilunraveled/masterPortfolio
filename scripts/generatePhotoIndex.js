const fs = require("fs");
const path = require("path");

// Function to ensure a directory exists
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const photosDir = path.join(__dirname, "../public/photos");
ensureDir(photosDir);

// Get all location directories
const locationDirs = fs
  .readdirSync(photosDir)
  .filter((item) => fs.statSync(path.join(photosDir, item)).isDirectory());

// Create an index for each location
const photoIndex = {};

locationDirs.forEach((dir) => {
  const locationPath = path.join(photosDir, dir);
  const photos = fs
    .readdirSync(locationPath)
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
  photoIndex[dir] = photos;
});

// Write the index file
fs.writeFileSync(
  path.join(photosDir, "index.json"),
  JSON.stringify(photoIndex, null, 2)
);

console.log("Photo index generated successfully!");
