const router = require('./router') 

function getTokens(req, userSocket) {
  try {
    userSocket.method_token = methodTokenHandler(req, userSocket)
    userSocket.route_token = routeTokenHandler(req, userSocket)
  } catch (err) {
    console.log(err.stack) 
  }
  return userSocket;
}

function methodTokenHandler(req, userSocket) {
  const { method } = req;
  if (method === 'GET') { return userSocket.method_token = true; }
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
  return userSocket.method_token = 'possible'; 
  } else { return method_token = false; }
}
  
function routeTokenHandler(req, userSocket) {
  let { method_token, route_token } = userSocket;
  if (method_token === true || method_token === 'possible') {
    route_token = false;
    const route = router.find((router) => {
      router.endpoint === req.pathname && router.method === req.method
    })
    if (route) return route_token = true;
    else {} 
  }
   else return route_token = false; 
}

module.exports = { 
  getTokens,
  methodTokenHandler, 
  routeTokenHandler
}