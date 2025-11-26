#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";
import { scanDirectory, CSV_COLUMNS, CSV_ERRORS } from "./imgNewNameCSV.js";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* TODO : Remove encoding replacement */
const importFilePath = import.meta.url
  .replace("file:///", "")
  .replaceAll("/", "\\")
  .replace("%C3%81", "Á")
  .replaceAll("%20", " ");

let isCommandLineExecution = importFilePath === process.argv[1];
let rl;

async function parseCSV() {
  console.log("### Parsing CSV file");

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
  console.log("### Renaming images");

  let yesAll = false;
  let noAll = false;

  for (const record of records) {
    if (noAll) {
      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
      continue;
    }

    try {
      await fs.promises.access(
        record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH],
        fs.promises.constants.F_OK,
      );

      // Original file exists. Safe to rename.
    } catch (error) {
      console.log(
        `### Operation skipped, the following file does not exist:\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n`,
      );

      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.ORIGINAL_DOES_NOT_EXIST;
      continue;
    }

    try {
      await fs.promises.access(
        record[CSV_COLUMNS.NEW_IMG_FULL_PATH],
        fs.promises.constants.F_OK,
      );

      console.error(
        `---- ERROR: Renamed file already exists, skipping file renaming.\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n"${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}"\n${err.message}`,
      );

      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.RENAMED_ALREADY_EXISTS;
      continue;
    } catch (error) {
      // The renamed file doesn't exist. Safe to rename.
    }

    if (!yesAll && isCommandLineExecution) {
      const answer = await rl.question(
        `### Do you want to proceed with the following renaming operation? (y/n | yes/no | yesAll/noAll):\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n${record[CSV_COLUMNS.NEW_IMG_FULL_PATH]}\n`,
      );

      if (!["yes", "y", "yesall", "noall"].includes(answer.toLowerCase())) {
        record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
        console.log("### Operation skipped");

        continue;
      } else if (answer.toLowerCase() === "yesall") {
        yesAll = true;
      } else if (answer.toLowerCase() === "noall") {
        noAll = true;
        record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
        console.log("### Operations skipped");

        continue;
      }
    }

    try {
      await fs.promises.rename(
        record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH],
        record[CSV_COLUMNS.NEW_IMG_FULL_PATH],
      );

      console.log("### File renamed successfully!");
    } catch (err) {
      console.error(`---- ERROR: Couldn't rename the file:`, err.message);
      continue;
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

  const filteredRecords = records.filter(
    (record) => record[CSV_COLUMNS.ERROR] === CSV_ERRORS.OK,
  );

  for (const filePath of files) {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");

      let updatedContent = data;
      for (const record of filteredRecords) {
        updatedContent = updatedContent.replaceAll(
          `"${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]}"`,
          `"${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]}"`,
        );
      }

      for (const record of filteredRecords) {
        updatedContent = updatedContent.replaceAll(
          `'${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]}'`,
          `'${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]}'`,
        );
      }

      // For Markdown img links. Ex: ![Come check out our fleet at Falcon Field Airport (KFFZ)!](/blog/SimpliFly-KFFZ-aircraft.webp)
      for (const record of filteredRecords) {
        updatedContent = updatedContent.replaceAll(
          `(${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]})`,
          `(${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]})`,
        );
      }

      if (data === updatedContent) {
        continue;
      }

      try {
        await fs.promises.writeFile(filePath, updatedContent, "utf-8");

        console.log("### File updated successfully: ", filePath);
      } catch (err) {
        console.error("---- ERROR: Error writing file:", err);
      }
    } catch (err) {
      console.error(
        `---- ERROR: Error reading a file: "${filePath}".`,
        err.message,
      );
    }
  }
}

async function runCommand() {
  if (!isCommandLineExecution) return;

  rl = createInterface({ input, output });

  const records = await parseCSV();
  if (records.length === 0) {
    return;
  }

  await renameImages(records);
  await substituteImageFileReferences(records);

  rl.close();
}

await runCommand();

export { renameImages };
