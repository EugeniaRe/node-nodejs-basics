import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
  const dirname = import.meta.dirname;
  const filePath = join(dirname, "files", "fileToRead.txt");
  const stream = createReadStream(filePath, { encoding: "utf-8" });

  stream.pipe(process.stdout);
  stream.on("end", () => {
    console.log("\n");
  });
};

await read();
