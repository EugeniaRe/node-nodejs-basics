import { join } from "path";
import { rm } from "node:fs/promises";

const __dirname = import.meta.dirname;

const removePath = join(__dirname, "files", "fileToRemove.txt");
const remove = async () => {
  try {
    await rm(removePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
