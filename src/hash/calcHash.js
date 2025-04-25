import path from "path";
import { createHash } from "node:crypto";
import fs from "node:fs";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const dirname = import.meta.dirname;

  const hashPath = path.join(dirname, "files", "fileToCalculateHashFor.txt");
  const input = fs.createReadStream(hashPath);

  input.on("readable", () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    }
  });

  input.on("end", () => {
    console.log(hash.digest("hex"));
  });
};
await calculateHash();
