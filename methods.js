function methodHandler(req) {
    const { method} = req;
    let method_token = '';
    if (method === 'GET') {
        return method_token = 'granted'
    }
    if (method === 'POST' || method === 'PUT' || method === 'DELETE'){
        method_token = 'route_token needed to grant access'
    }
}

module.exports = {
    methodHandler
}