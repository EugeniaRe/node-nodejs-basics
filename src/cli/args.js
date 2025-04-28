const parseArgs = () => {
  const args = process.argv
    .slice(2)
    .map((arg, i, arr) => {
      if (i % 2 === 0) return `${arg} is ${arr[i + 1]}`;
    })
    .filter((arg) => arg);

  console.log(args.join(", "));
};
parseArgs();
