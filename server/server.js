const http = require('http');
const { URL }= require('url');
const { config } = require('./config')
const urlHandler = require('../resources/urlHandler')
const logger = require('../resources/logger');
const headers = require('../resources/headers');
const tokens  = require('../controllers/tokener');
const router = require('../controllers/router');
const { url } = require('inspector');

const requestListener = async function(req, res) {
  
  // TODO : EXTRACT API TOKEN FROM URL  
  
  const requestURL = urlHandler.URLFormatter(config, req);
  const query = urlHandler.queryFormatter(requestURL);
  
  
  const requestInfo = {
    'href': requestURL.href.toString(),
    "address": req.socket.localAddress + ':' + req.socket.localPort,
    'pathname': requestURL.pathname.toString(),
    'method': req.method,
    'query': query
    // 'bodyRequest' : form
  }
  
  if (requestInfo.pathname === '/favicon.ico') return res.end()

  headers.requestHeaderOptions(requestInfo, res)
  
  const userSocket = {
    method_token: '',
    route_token: '',
    entry: '',
    // api_token: '',
  }

  logger.requestEnd(requestInfo);

  tokens.getTokens(requestInfo, userSocket); 
  
  headers.responseHeaderOptions('allowed', res);

  const response = await router.handler(requestInfo, userSocket, res);

  res.write(response);

  // TODO : Fs. writeFile to logs.json
  
  // logger.saveLog()
  
  logger.responseEnd();
  
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