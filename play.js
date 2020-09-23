const {connect} = require('./client')
const {setupInput} = require('./input')


console.log('Connecting ...');
setupInput(connect());


// connect() is the return value of the 
// function as defined in client.js
// i.e net.createConnection({host: HOST, port: PORT})