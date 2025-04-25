import { spawn } from "child_process";
import { join } from "path";

const dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
  const filePath = join(dirname, "files", "script.js");

  const childProcess = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", (err) => {
    throw err;
  });
  return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
