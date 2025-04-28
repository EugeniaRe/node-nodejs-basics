import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const dirname = import.meta.dirname;

const decompress = async () => {
  const readStream = createReadStream(join(dirname, "files", "archive.gz"));
  const writeStream = createWriteStream(
    join(dirname, "files", "fileToCompress.txt")
  );

  try {
    await pipeline(readStream, createGunzip(), writeStream);
  } catch (err) {
    throw err;
  }
};

await decompress();
