import { join } from "path";
import { access, readFile, rename as renamePromise } from "node:fs/promises";

const __dirname = import.meta.dirname;

const wrongPath = join(__dirname, "files", "wrongFilename.txt");
const properPath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  async function fileExists(filePath) {
    try {
      await access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  try {
    const isProperFile = await fileExists(properPath);
    if (!isProperFile) {
      await renamePromise(wrongPath, properPath);
    } else {
      throw new Error("FS operation failed");
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
