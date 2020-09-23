const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // set the encoding to read text
  conn.setEncoding("utf8");

  // when the client connects...
  conn.on("connect", () => {
    console.log("Successfully connected to the server!"); // log a welcome message
    conn.write("Name: SEK"); // write a name to the server
  });

  // if the client recieves a message from the server ...
  conn.on("data", (message) => {
    console.log(message); // print it to the console
  });

  return conn; // the function returns the connection itself
};

module.exports = { connect };

// console.log('Connecting ...');
// connect();
