import { join } from "path";
import { writeFile } from "node:fs/promises";

const __dirname = import.meta.dirname;

const create = async () => {
  const path = join(__dirname, "files", "fresh.txt");
  try {
    await writeFile(path, "I am fresh and young", {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
