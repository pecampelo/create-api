function allowedRoute(req, res) {
    res.write(JSON.stringify({
        "message": "Hello World!",    
        "urlRequested": req.url,
        "bodyRequest": `${req.body}`,
    }));
    return true;
}

function notFoundHandler(req, res) {
    res.write(JSON.stringify({
        "message": "Not Found",    
        "urlRequested": req.url
    }));
}

function routeHandler(req, res) {
    let routePermission = [];
    if (req.url === '/' && req.method === "GET") {
        allowedRoute(req, res);
        return routePermission = [{
            "permission" : true
        }];
    }
    else { notFoundHandler(req, res); }
    return routePermission;
}

module.exports = {
    routeHandler
}