const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on("data", (data) => {
    if (data === "\u0003") {
      process.exit();
    }
  });
};

setupInput();

module.exports = { setupInput };