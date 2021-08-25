const http = require('http');
const { URL }= require('url');
const { config } = require('./config')
const querystring = require('querystring');
const logger = require('./logger');
const headers = require('./headers');
const tokens  = require('../controllers/tokener');
const router = require('../controllers/router');

const requestListener = async function(req, res) {

  headers.requestHeaderOptions(req);

  // TODO : EXTRACT API TOKEN FROM URL  
  
  const requestURL = new URL('http://' + config.host + ':' + config.port + req.url)

  console.log()

  const searched = requestURL.search

  const requestInfo = {
    'href': requestURL.href,
    'origin': requestURL.origin,
    'query': querystring.parse(searched.slice(1))
  }
 
  
  const userSocket = {
    address: req.socket.localAddress + ':' + req.socket.localPort,
    request: requestInfo,
    bodyRequest: req.body,
    api_token: false,
    method_token: '',
    route_token: '',
    entry: ''
  }
  logger.requestEnded(userSocket);
  
  tokens.getTokens(req, userSocket); 
  
  // TODO: Extract entry from token
  
  headers.responseHeaderOptions('allowed', res);
  
  const response = await router.handler(req, userSocket); 
  logger.data(response);
  res.write(response);
  logger.saveLog()
  logger.responseEnded();
  
  res.end();
}

const server = http.createServer(requestListener);

function startServer(config) {
  
  server.listen(config, () => { 
    if (server.listening === true) {
      console.log('...')
      console.log(`Server is running on ${config.host}:${config.port}`);
      console.log('...')
    } else { 
      console.log (`Something wrong happened!`)
    }
  })
}

module.exports = {
    startServer
}