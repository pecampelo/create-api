const http = require('http');
const { URL }= require('url');
const { config } = require('./config')
const urlHandler = require('../resources/urlHandler')
const headers = require('../resources/headers');
const tokens  = require('../controllers/tokener');
const router = require('../controllers/router');
const logger = require('../resources/logger');

const requestListener = async function(req, res) {
  
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

  // TODO : EXTRACT API TOKEN FROM URL  
  // TODO : EXTRACT REQUEST BODY
  
  
  
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

  // TODO: Connect use to database


  res.write(response);

  // TODO : Fs. writeFile to logs.json
  
  logger.saveLog()
  
  res.end();
}

const server = http.createServer(requestListener);

module.exports = server, requestListener;