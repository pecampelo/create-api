const { endpoints } = require('../server/config');

function getTokens(req, userSocket) {
  try {
    userSocket.method_token = methodTokenHandler(req, userSocket)
    userSocket.route_token = routeTokenHandler(req, userSocket)
  } catch (err) {
    console.log(err.stack) 
  }
  return userSocket;
}

function methodTokenHandler(requestInfo, userSocket) {
  const { method } = requestInfo;
  if (method === 'GET') { return userSocket.method_token = true; }
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
  return userSocket. method_token = 'possible'; 
  } else { return method_token = false; }
}
  
function routeTokenHandler(req, userSocket) {
  let { method_token, route_token } = userSocket;
  if (method_token === true || method_token === 'possible') {
    route_token = false;
    endpoints.forEach((endpoint) => {
      if (endpoint === req.pathname) {
       return route_token = true;
      } 
    })
    return route_token;
  } else {}
}

module.exports = { 
  getTokens,
  methodTokenHandler, 
  routeTokenHandler
}