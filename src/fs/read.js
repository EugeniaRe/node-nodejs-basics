import { readFile } from "fs/promises";
import { join } from "path";

const __dirname = import.meta.dirname;

const path = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await readFile(path, "utf-8");
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
