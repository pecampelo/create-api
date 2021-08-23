const http = require('http');
const options = require('./config/options');
const router = require('./controllers/router');
const tokens  = require('./controllers/tokener');
const logger = require('./config/logger');
const EventEmitter = require('events')

const server = http.createServer(async (req, res) => {
 
  options.requestHeaderOptions(req);

  if (req.url === '/favicon.ico') { return res.end() }
    // TODO : EXTRACT API TOKEN FROM URL

    // UserSocket =>> object used to store tokens 
    // and general server information that can be later used.
  const userSocket = {
    address: req.socket.localAddress + ':' + req.socket.localPort,
    request: [ req.url, req.method],
    bodyRequest: req.body,
    api_token: false,
    method_token: '',
    route_token: '',
    entry: ''
  }
  
  logger.requestEnded(userSocket);

  tokens.getTokens(req, userSocket); 

  // TODO: Extract entry from token
  

  options.responseHeaderOptions('allowed', res);
  
  
  const response = await router.handler(req, userSocket); 
  
  res.write(response);

  logger.responseEnded();

  res.end();




});

function startServer(serverOptions) {
  
  server.listen(serverOptions, () => { 
    if (server.listening === true) {
      console.log('...')
      console.log(`Server is running on ${serverOptions.host}:${serverOptions.port}`);
      console.log('...')
    } else { 
      console.log (`Something wrong happened!`)
    }
  })
}

module.exports = {
    startServer
}