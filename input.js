const { connect } = require("./client");

let connection;

const setupInput = function (conn) {
  connection = conn;
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
    // "w"
    if (data === "\u0077") {
      connection.write("Move: up");
    }

    // "a"
    if (data === "\u0061") {
      connection.write("Move: left");
    }

    // "s"
    if (data === "\u0073") {
      connection.write("Move: down");
    }
    // "d"
    if (data === "\u0064") {
      connection.write("Move: right");
    }
  });
};

setupInput();

module.exports = { setupInput };
