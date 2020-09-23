const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to the server!');
    conn.write('Name: SEK')
    


  

  })



  conn.on('data', (message) => {
    console.log(message);
  })
  
  return conn;
};

module.exports = {connect};

// console.log('Connecting ...');
// connect();