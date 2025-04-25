import os from "os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const cores = os.cpus().length;
  const resultsArr = [];
  const workers = [];

  const workerPath = new URL("./worker.js", import.meta.url);

  for (let i = 0; i < cores; i++) {
    const worker = new Worker(workerPath, { workerData: 10 + i });

    worker.on("message", (result) => {
      resultsArr.push({ status: "resolved", data: result });
    });

    worker.on("error", (err) => {
      resultsArr.push({ status: "error", data: null });
    });

    workers.push(worker);
  }

  await Promise.all(
    workers.map((worker) => new Promise((res) => worker.on("exit", res)))
  );

  console.log(resultsArr);
};

await performCalculations();
