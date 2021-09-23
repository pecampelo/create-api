const http = require('http');
const config = require('../config')
const { bodyParser, queryParser, URLFormatter } = require('./helpers/parsers')
const { headerOptions } = require('./helpers/headers');
const router = require('./router');
const logger = require('./helpers/logger');
const { requestHeaderOptions } = require('../config');

const requestListener = async (req, res) => {
  
  requestHeaderOptions(req);

  const requestURL = await URLFormatter(config.options, req);
  
  req.pathname = requestURL.pathname.toString()
  if (req.pathname === '/favicon.ico') return res.end()

  req.address = req.socket.localAddress + ':' + req.socket.localPort
  req.method = req.method
  req.query = await queryParser(requestURL);
   
  // console.log('\n--------------------------------------------------------------------------')
  // console.log('New Request Incoming!')
    
  // headerOptions(req, 'allowed', res)
  
  // TODO : EXTRACT API TOKEN FROM URL
  
  let { pathname } = requestURL
  let id = null;
  let username = null;
  
    const splitEndpoint = pathname.split('/').filter(Boolean); // WOW
  
  
  if (splitEndpoint.length > 1) {
    if (Number(splitEndpoint[1])) {
      pathname = `/${splitEndpoint[0]}/:id`
      id = Number(splitEndpoint[1]);
    }
    else {
      pathname = `/${splitEndpoint[0]}/:name`
      username = splitEndpoint[1].toLowerCase();
    }
  }

  
  
  res.send = (statusCode, body) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(body));    
  }
  
  const route = router.find((routeObject) => (
    routeObject.endpoint === pathname && routeObject.method === req.method
  ));

  if (route) {
      
    
    req.params = { id, username }

    res.send = (statusCode, body) => {
      res.writeHead(statusCode, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(body));    
    }

    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {

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
}

const server = http.createServer(requestListener);

module.exports = server, requestListener;