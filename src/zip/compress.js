import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const dirname = import.meta.dirname;
const compress = async () => {
  const readStream = createReadStream(
    join(dirname, "files", "fileToCompress.txt")
  );
  const writeStream = createWriteStream(join(dirname, "files", "archive.gz"));

  try {
    await pipeline(readStream, createGzip(), writeStream);
  } catch (err) {
    throw err;
  }
};

await compress();
