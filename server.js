const http = require('http');
const router = require('./controllers/router');
const tokens  = require('./controllers/tokens')

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

  let userSocket = {
    address: req.socket.localAddress + ':' + req.socket.localPort,
    bodyRequest: req.body,
    api_token: false,
    method_token: '',
    route_token: '',
    entry: ''
  }
  
  tokens.getTokens(req, userSocket);
  
  const response = router.handler(req, res, userSocket); 
  res.write(response);
  console.log(userSocket.address + ' connected!');
  console.log(`Response was sent`) 
  console.log('...')
  res.end();  

  
  // `res` is an http.ServerResponse, which is a writable stream.
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