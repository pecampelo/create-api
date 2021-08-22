const http = require('http');
const headers = require('./controllers/headers')
const router = require('./controllers/router');
const tokens  = require('./controllers/tokens')

const server = http.createServer((req, res) => {
 
  headers.requestOptions(req, res);
  
  // TODO : EXTRACT API TOKEN FROM URL

  // UserSocket =>> object used to store tokens 
  // and general server information that can be later used.
  

  const userSocket = {
    address: req.socket.localAddress + ':' + req.socket.localPort,
    bodyRequest: req.body,
    api_token: false,
    method_token: '',
    route_token: '',
    entry: ''
  }

  tokens.getTokens(req, userSocket); 

  // TODO: Extract entry from token
  

  headers.responseOptions('allowed', res);
  
  
  
  const response = router.handler(req, userSocket); 
  res.write(response);

  console.log(userSocket.address + ' connected!');
  console.log(`Response was sent`) 
  console.log('...')

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