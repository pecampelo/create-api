const { messageAllowedRequest, messageNotFound } = require('./models')

function permittedRoute(req, res, userSocket) {
    let { url } = req;
    let { route_token } = userSocket;
    if (url === '/') {
        let route_token = true;
        res.write(messageAllowedRequest(req, userSocket))
        return route_token = true;
    } else { 
        return route_token = false 
    }
}

function notFoundHandler(req, res, userSocket) {
    let { route_token } = userSocket;
    route_token = route_token === '' ? '?' : route_token;
    res.write(messageNotFound(req, userSocket));
}

function routeHandler(req, res, userSocket) {
    let { method_token, route_token } = userSocket;
    if (method_token === true || method_token === 'possible') {
        return route_token = permittedRoute(req, res, userSocket);
    }
    else {
        return notFoundHandler(req, res, userSocket);
    }
}

function methodHandler(req) {
    const { method } = req;
    let method_token = '';
    if (method === 'GET')  return method_token = true;
    if (method !== 'POST' || method === 'PUT' || method === 'DELETE') return method_token = 'possible'; 
    else { return method_token = false}
}

module.exports = {
    notFoundHandler,
    routeHandler, 
    methodHandler
}