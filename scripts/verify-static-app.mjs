import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "app.js",
  "styles.css",
  "data/china.json"
];

await Promise.all(requiredFiles.map((file) => access(file)));

const html = await readFile("index.html", "utf8");
const requiredMarkers = [
  '<script src="./app.js"></script>',
  '<link rel="stylesheet" href="./styles.css" />',
  '<canvas id="mapCanvas"'
];

const missingMarkers = requiredMarkers.filter((marker) => !html.includes(marker));

if (missingMarkers.length) {
  console.error(`Static app verification failed. Missing markers: ${missingMarkers.join(", ")}`);
  process.exit(1);
}

console.log("Static app verification passed.");
