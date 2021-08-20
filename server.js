const http = require('http');
const router = require('./controllers/router');

const headerOptions = (req, res) => {
    res.removeHeader('Connection', 'X-Powered-By');
    res.writeHead(200, { 
        "Content-Type": "application/json", 
        'Access-Control-Allow-Origin': '' })
}

const server = http.createServer((req, res) => {
  //
  // Request =>> `req` is an http.IncomingMessage, which is a readable stream.
  //
  // UserSocket =>>  
  // object used to store tokens and general server information
  // that can be stored and later used or inherited.
  // 
  headerOptions(req, res)

  server.once('request', () => {
    console.log(`User from ${userSocket.address} has connected`);
  });

  let userSocket = {
    address: req.socket.localAddress + ':' + req.socket.localPort,
    bodyRequest: req.body,
    api_token: false,
    method_token: '',
    route_token: '',
    entry: ''
  }
  
  router.getTokens(req, userSocket);
  
  router.handler(req, res, userSocket);
  
  console.log(`No more data in response.`)
    
    // `res` is an http.ServerResponse, which is a writable stream.
  res.end();
});

function startServer(options) {
    server.listen(options, () => { 
        if (server.listening === true) {
            console.log(`Server is running on ${options.host}:${options.port}`);
        } else { 
            console.log (`Something wrong happened!`)
        }
    }) 
    
}

module.exports = {
    startServer
}