const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on("connect", () => {
    console.log("successfully connected to game server!");
    conn.write(`Name: VVZ`);

    setInterval(() => {
      // conn.write("Move: up");
    }, 500);

    setInterval(() => {
      conn.write("Move: down");
    }, 300);

    setInterval(() => {
      conn.write("Move: left");
    }, 100);

    setInterval(() => {
      conn.write("Move: right");
    }, 100);

    setInterval(() => {
      conn.write("Move: up");
    }, 500);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect };
