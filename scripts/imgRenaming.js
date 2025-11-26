#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";
import { scanDirectory, CSV_COLUMNS } from "./imgNewNameCSV";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function parseCSV() {
  console.log("#### Parsing CSV file");

  const records = [];
  const csvPath = `${__dirname}/output.csv`;

  let parser;
  try {
    parser = fs.createReadStream(csvPath).pipe(
      parse({
        delimiter: ",",
      }),
    );
  } catch (err) {
    console.error(
      `---- ERROR: Couldn't parse the CSV file: "${csvPath}".`,
      err,
    );
    return records;
  }

  for await (const record of parser) {
    records.push(record);
  }

  return records;
}

async function renameImages(records) {
  console.log("#### Renaming images");
  for (const record of records) {
    try {
      const stats = fs.lstatSync(record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]);
      if (!stats.isFile()) {
        console.error(`---- ERROR: "${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}" is not a file path.`);
        return;
      }
    } catch (err) {
      console.error(
        `---- ERROR: "${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}" does not exist or is inaccessible (synchronously):`,
        err.message,
      );
      return;
    }

    try {
      fs.rename(record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH], record[CSV_COLUMNS.NEW_IMG_FULL_PATH], (err) => {
        if (err) {
          console.error("---- ERROR: Error renaming file:", err);
          return;
        }

        console.log(`File ${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]} renamed successfully to ${record[CSV_COLUMNS.NEW_IMG_FULL_PATH]}!`);
      });
    } catch (err) {
      console.error(
        `---- ERROR: Couldn't rename the following file: "${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}"`,
        err.message,
      );
      return;
    }
  }
}

async function substituteImageFileReferences(records) {
  console.log(`### Substituting image file references in the "src" folder`);
  const srcDir = path.join(__dirname, "../src");

  const files = await scanDirectory(srcDir, [
    ".astro",
    ".js",
    ".ts",
    ".jsx",
    ".md",
    ".mdx",
  ]);

  for (const filePath of files) {
    try {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("---- ERROR: Error reading file:", err);
          return;
        }

        for (const record of records) {
          const updatedContent = data.replaceAll(record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH], record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]);
  
          fs.writeFile(filePath, updatedContent, "utf-8", (err) => {
            if (err) {
              console.error("---- ERROR: Error writing file:", err);
            }
          });
        }
      });
    } catch (err) {
      console.error(
        `---- ERROR: Error reading a file: "${filePath}".`,
        err.message,
      );
    }
  }
}

/* TODO : Remove encoding replacement */
const importFilePath = import.meta.url
  .replace("file:///", "")
  .replaceAll("/", "\\")
  .replace("%C3%81", "Á")
  .replaceAll("%20", " ");

if (importFilePath === process.argv[1]) {
  // const records = await parseCSV();

  // if (records.length === 0) return;

  // await renameImages(records);
  // await substituteImageFileReferences(records);
}

export { renameImages };
