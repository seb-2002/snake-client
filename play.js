const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('data', (message) => {
    console.log(message);
  })
  
  return conn;
};

console.log('Connecting ...');
connect();