const http = require('http');
const config = require('../config')
const urlHandler = require('./helpers/urlHandler')
const { bodyParser } = require('./helpers/queryFormatter')
const headers = require('./helpers/headers');
const tokens  = require('./tokener');
const router = require('./router');
const logger = require('./helpers/logger');

const requestListener = async (req, res) => {
  
  req.on('error', (err) => {
    console.error(err.stack);
  });

  const requestURL = await urlHandler.URLFormatter(config.options, req);
  const query = await urlHandler.queryGetter(requestURL);
  const body = await urlHandler.bodyGetter(req);

  req.pathname = requestURL.pathname.toString()
  if (req.pathname === '/favicon.ico') return res.end()

  req.href = requestURL.href.toString()
  req.address = req.socket.localAddress + ':' + req.socket.localPort
  req.method = req.method
  req.query = query
  req.bodyRequest = body
  
  console.log('\n--------------------------------------------------------------------------')
  console.log('New Request Incoming!')
  
  headers.requestHeaderOptions(req, res)
  
  // TODO : EXTRACT API TOKEN FROM URL
  
  logger.requestEnd(req);
  
  const userSocket = {
    method_token: '',
    route_token: '',
    entry: '',
    // api_token: '',
  }

  tokens.getTokens(req, userSocket); 
  
  headers.responseHeaderOptions('allowed', res);

  let id = null;
  let name = null;





  const splitEndpoint = req.pathname.split('/').filter(Boolean); // WOW
  
  
  if (splitEndpoint.length > 1) {
    if (Number(splitEndpoint[1])) {
      req.pathname = `/${splitEndpoint[0]}/:id`
      id = Number(splitEndpoint[1]);
    }
    else {
      req.pathname = `/${splitEndpoint[0]}/:name`
      name = splitEndpoint[1].toLowerCase();
    }
  }
  


  res.send = (statusCode, body) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(body));    
  }

  const route = router.find((router) => (
    router.endpoint === req.pathname && router.method === req.method
  ));

  if (route) {
    res.send = (statusCode, body) => {
      res.writeHead(statusCode, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(body));    
    }

    if (['POST', 'PUT'].includes(req.method)) {

      bodyParser(req, () => { route.handler(req, res)})

    } else {

      route.handler(req, res);
    }


  } else {
  res.writeHead(404, { 'Content-Type': 'text/html'});
  res.end(`Cannot ${req.method} ${req.url}`);
  }

  // const response = await router(req, userSocket, res);

  // TODO separate status code from response
  // TODO: Connect use to database


  // res.write(response);
  // TODO : Fs. writeFile to logs.json
  
  logger.saveLog()
  
  res.end();
}

const server = http.createServer(requestListener);

module.exports = server, requestListener;