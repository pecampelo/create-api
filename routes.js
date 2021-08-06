function allowedRoute(req, res) {
    return res.write(JSON.stringify({
        "message": "Hello World!",    
        "urlRequested": req.url,
        "bodyRequest": `${req.body}`,
    }));
}

function notFoundHandler(req, res) {
    return res.write(JSON.stringify({
        "message": "Not Found",    
        "urlRequested": req.url
    }));
}

function routeHandler(req, res) {
    if (req.url === '/' && req.method === "GET") allowedRoute(req, res);
    else { notFoundHandler(req, res); }
}

module.exports = {
    routeHandler
}