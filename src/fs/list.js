import { join } from "path";
import { readdir } from "fs/promises";

const __dirname = import.meta.dirname;

const pathToFiles = join(__dirname, "files");

const list = async () => {
  try {
    const files = await readdir(pathToFiles);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
