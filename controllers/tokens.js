const { endpoints } = require('../models/endpoints');

function methodTokenHandler(req, userSocket) {
  const { method } = req;
  if (method === 'GET') { return userSocket.method_token = true; }
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
  return userSocket. method_token = 'possible'; 
  } else { return method_token = false; }
}
  
function routeTokenHandler(req, userSocket) {
  let { method_token, route_token } = userSocket;
  if (method_token === true || method_token === 'possible') {
    endpoints.forEach((endpoint) => {
      if (endpoint === req.url) return route_token = true;
      else {}
    })
    return route_token;
  } else { return userSocket.route_token = false }
}

function entryTokenHandler(userSocket) {
  let entry;
  const { method_token, route_token } = userSocket;
  if ( (method_token === true || 'possible') && route_token === true ) {
    return entry = 'allowed';
  } else { 
    return entry = 'denied';
  }
}

module.exports = { 
  methodTokenHandler, 
  routeTokenHandler, 
  entryTokenHandler
}