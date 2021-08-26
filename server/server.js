const http = require('http');
const { URL }= require('url');
const { config } = require('./config')
const querystring = require('querystring');
const logger = require('./logger');
const headers = require('./headers');
const tokens  = require('../controllers/tokener');
const router = require('../controllers/router');

const requestListener = async function(req, res) {
  
  
  // TODO : EXTRACT API TOKEN FROM URL  
  
  const requestURL = new URL('http://' + config.host + ':' + config.port + req.url)
  
  const requestInfo = {
    'href': requestURL.href,
    'pathname': requestURL.pathname,
    "address": req.socket.localAddress + ':' + req.socket.localPort,
    'query': querystring.parse(requestURL.search.slice(1)),
    'method': req.method,
    'bodyRequest' : req.body
  }

  const userSocket = {
    api_token: '',
    method_token: '',
    route_token: '',
    entry: '',
  }

  const responseInfo = {
    bodyResponse: '',
  }

  headers.requestHeaderOptions(requestInfo, res)
    
  logger.requestEnded(requestInfo);

  
  tokens.getTokens(req, userSocket); 
  
  // TODO: Extract entry from token
  
  headers.responseHeaderOptions('allowed', res);
  
  const response = await router.handler(req, userSocket); 
  res.write(response);

  // TODO : Fs. writeFile to logs.json
  
  // logger.saveLog()
  
  logger.responseEnded();
  
  res.end();
}

const server = http.createServer( requestListener);

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