import { createWriteStream } from "fs";
import { join } from "path";

const dirname = import.meta.dirname;

const write = async () => {
  const writeStream = createWriteStream(
    join(dirname, "files", "fileToWrite.txt"),
    {
      encoding: "utf-8",
    }
  );
  process.stdin.pipe(writeStream);
};

await write();
