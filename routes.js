function notFoundHandler(req, res) {
    res.write(JSON.stringify({
        "message": "Not Found",    
        "urlRequested": req.url
    }));
}

function mainRoute(req, res) {
    res.write(JSON.stringify({
        "message": "Hello World!",    
        "urlRequested": req.url,
        "bodyRequest": `${req.body}`,
    }));
}

function notFoundHandler(req, res) {
    res.write(JSON.stringify({
        "message": "Not Found",    
        "urlRequested": req.url
    }));
}

function routeHandler(req, res, method_token) {
    if (method_token !== 'granted') return notFoundHandler(req, res);
    else {
        mainRoute(req, res);
    }
}

module.exports = {
    notFoundHandler,
    routeHandler
}