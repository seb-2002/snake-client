
let connection;

// this function is passed as a callback in setupInput
// the 'key' parameter is the 'data' which the user writes to the console
const handleUserInput = function (key) {
    switch (key) {
      case "\u0003": // if ctrl + c ....
        process.exit(); // quit everything
      case "w":
        // connection is defined in the parent function
        // as the argument passed to that parent function '(conn)'
        // (see bottom of page)
        connection.write('Move: up');
      case "s":
        connection.write('Move: down');
      case "d":
        connection.write('Move: right');
      case "a":
        connection.write('Move: left');
    }
};
    
      
// setupInput is a function of the connection data    
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // when data is written in the terminal by the user ...
  stdin.on("data", handleUserInput); // call handleUserInput
  
  return stdin;
};

module.exports = {setupInput}

// connection.write is actually going to be 
// net.createConnection({host: '135.23.222.131', port: 50542}).write
// connect is defined in client.js
// its return value is passed to setupInput as an argument in play.js



