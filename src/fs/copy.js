import { join } from "path";
import { copyFile, mkdir, readdir } from "node:fs/promises";

const __dirname = import.meta.dirname;

const pathToFiles = join(__dirname, "files");
const pathCopy = join(__dirname, "files_copy");

const copy = async () => {
  try {
    const files = await readdir(pathToFiles);
    await mkdir(pathCopy);

    await Promise.all(
      files.map(async (file) => {
        const fromPath = join(pathToFiles, file);
        const toPath = join(pathCopy, file);
        await copyFile(fromPath, toPath);
      })
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
