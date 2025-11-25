#!/usr/bin/env node

import { promises as fs, writeFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const keywords = {
  company: "simplifly",
  location: ["mesa", "arizona"],
  generic: [
    "flight-school",
    "flight-training",
    "pilot-training",
    "flying-lessons",
    "become-a-pilot",
    "discovery-flight",
  ],
  programs: [
    "private-pilot",
    "instrument-rating",
    "commercial-pilot",
    "multi-engine-rating",
    "certified-flight-instructor",
  ],
};

const fullKeywordList = [
  keywords.company,
  ...keywords.location,
  ...keywords.generic,
  ...keywords.programs,
];
const generalKeywords = [...keywords.generic, ...keywords.programs];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function scanDirectory(dir, extensions) {
  const files = [];
  const extArray = Array.isArray(extensions) ? extensions : [extensions];

  async function* walk(dir) {
    const dirEntries = await fs.readdir(dir, { withFileTypes: true });

    for (const dirEntry of dirEntries) {
      const res = path.resolve(dir, dirEntry.name);
      if (dirEntry.isDirectory()) {
        yield* walk(res);
      } else if (extArray.some((ext) => dirEntry.name.endsWith(ext))) {
        yield res;
      }
    }
  }

  for await (const file of walk(dir)) {
    files.push(file);
  }

  return files;
}

function generateNewName(filePath) {
  const parsedPath = path.parse(filePath);

  let newName = parsedPath.name.toLowerCase();

  // Remove keywords from the name
  for (const keyword of fullKeywordList) {
    if (newName.includes(keyword + "-")) {
      newName = newName.replaceAll(keyword + "-", "");
    }

    if (newName.includes("-" + keyword)) {
      newName = newName.replaceAll(keyword + "-", "");
    }
  }

  return path.join(
    parsedPath.dir,
    `${newName}-${keywords.company}-${randomFromArray(keywords.location)}-${randomFromArray(generalKeywords)}` +
      parsedPath.ext,
  );
}

async function listImages() {
  const results = [];

  const assetsDir = path.join(__dirname, "../src/assets");
  const publicDir = path.join(__dirname, "../public");

  console.log("### Generating image path list for the assets folder. ###");
  const assetImages = await scanDirectory(assetsDir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".avif",
  ]);

  console.log("### Populating assets folder resulting image paths. ###");
  for (const imagePath of assetImages) {
    results.push([
      imagePath,
      generateNewName(imagePath),
    ]);
  }

  console.log("### Generating image path list for the public folder. ###");
  const publicImages = await scanDirectory(publicDir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".avif",
  ]);

  console.log("### Populating public folder resulting image paths. ###");
  for (const imagePath of publicImages) {
    results.push([
      imagePath,
      generateNewName(imagePath),
    ]);
  }

  return results;
}

async function generateCSV() {
  const results = await listImages();

  console.log("### Outputting CSV file. ###");

  // Convert the array to a CSV string
  const csvString = results.map((row) => row.join(",")).join("\n");

  // Write the CSV string to a file
  writeFile(path.join(__dirname, "output.csv"), csvString, (err) => {
    if (err) {
      console.error("### Error writing CSV file:", err);
    } else {
      console.log("### CSV file saved successfully! ###");
    }
  });
}

/* TODO : Remove encoding replacement */
const importFilePath = import.meta.url.replace("file:///", "").replaceAll("/", "\\").replace('%C3%81', "Á").replaceAll("%20", " ");

// console.log(import.meta.url);
// console.log(importFilePath);
// console.log(process.argv[1]);

if (importFilePath === process.argv[1]) {
  generateCSV();
}

export { generateCSV };
