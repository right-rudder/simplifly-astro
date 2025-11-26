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

const CSV_COLUMNS = {
  ORIGINAL_IMG_FULL_PATH: 0,
  NEW_IMG_FULL_PATH: 1,
  ORIGINAL_IMG_RELATIVE_PATH: 2,
  NEW_IMG_RELATIVE_PATH: 3,
  ERROR: 4,
}

const CSV_ERRORS = {
  OK: "OK",
  ORIGINAL_DOES_NOT_EXIST: "ORIGINAL FILE DOES NOT EXIST",
  RENAMED_ALREADY_EXISTS: "RENAMED FILE ALREADY EXISTS",
  USER_SKIPPED: "THE FILE RENAMING WAS SKIPPED BY THE USER",
}

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

function generateNewImagePath(filePath) {
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

async function listImagesFromDir(dir, relativeDirForm, results) {
  console.log(`### Generating image path list for "${dir}".`);
  const images = await scanDirectory(dir, [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".avif",
  ]);

  console.log(`### Populating resulting image paths from "${dir}".`);
  for (const imagePath of images) {
    const newPath = generateNewImagePath(imagePath);

    results.push([
      imagePath,
      newPath,
      "/" + path.relative(relativeDirForm, imagePath).replaceAll("\\", "/"),
      "/" + path.relative(relativeDirForm, newPath).replaceAll("\\", "/"),
      CSV_ERRORS.OK,
    ]);
  }
}

async function listImages() {
  const results = [];

  const assetsDir = path.join(__dirname, "../src/assets");
  const publicDir = path.join(__dirname, "../public");
  const projectDir = path.join(__dirname, "../");

  await listImagesFromDir(assetsDir, projectDir, results);
  await listImagesFromDir(publicDir, publicDir, results);

  return results;
}

async function generateCSV() {
  const results = await listImages();

  console.log("### Outputting CSV file.");

  // Convert the array to a CSV string
  const csvString = results.map((row) => row.join(",")).join("\n");

  // Write the CSV string to a file
  writeFile(path.join(__dirname, "output.csv"), csvString, (err) => {
    if (err) {
      console.error("### Error writing CSV file:", err);
    } else {
      console.log("### CSV file saved successfully!");
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

export { generateCSV, scanDirectory, CSV_COLUMNS, CSV_ERRORS };
