#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function parseCSV() {
  console.log("#### Parsing CSV file");

  const records = [];

  const parser = fs.createReadStream(`${__dirname}/output.csv`).pipe(
    parse({
      delimiter: ",",
    }),
  );

  for await (const record of parser) {
    records.push(record);
  }

  return records;
}

async function renameImages() {
  const records = await parseCSV();

  console.log("#### Renaming images");
  for (const record of records) {
    try {
      const stats = fs.lstatSync(record[0]);
      if (!stats.isFile()) {
        console.error(`---- ERROR: "${record[0]}" is not a file path.`);
        return;
      }
    } catch (err) {
      console.error(`---- ERROR: "${record[0]}" does not exist or is inaccessible (synchronously):`, err.message);
      return;
    }
  
    fs.rename(record[0], record[1], (err) => {
      if (err) {
        console.error("---- ERROR: Error renaming file:", err);
        return;
      }
  
      console.log(`File ${record[0]} renamed successfully to ${record[1]}!`);
    });
  }
}

async function fixImageFileReferences() {
  /* TODO : Finish */
}

/* TODO : Remove encoding replacement */
const importFilePath = import.meta.url
  .replace("file:///", "")
  .replaceAll("/", "\\").replace('%C3%81', "Á").replaceAll("%20", " ");

if (importFilePath === process.argv[1]) {
  await renameImages();
}

export { renameImages };