import { pipeline, Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      callback();
    },
  });

  pipeline(process.stdin, reverseTransform, process.stdout, (err) => {
    if (err) throw err;
    console.log("\n");
  });
};

await transform();
