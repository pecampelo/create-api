function notFoundHandler(req, res) {
    res.write(JSON.stringify({
        "message": "Not Found",    
        "urlRequested": req.url
        })
    );
}

function permittedRoute(req, res, method_token) {
    const { url } = req;
    if (url === '/') {
        let route_token = true;
        res.write(JSON.stringify({
            "message": "Hello World!",    
            "urlRequested": req.url,
            "method_token": method_token,
            "route_token": route_token,
            "bodyRequest": `${req.body}`,
        }))
        return route_token = true;
    } else { 
        return route_token = false }
}

function notFoundHandler(req, res, method_token) {
    route_token = false;
    res.write(JSON.stringify({
        "message": "Not Found",
        "route_token": route_token,
        "urlRequested": req.url
        })
    )
}

function routeHandler(req, res, method_token) {
    if (method_token === true || method_token === 'possible') {
        return route_token = permittedRoute(req, res, method_token);
    }
    else {
        return notFoundHandler(req, res, method_token);
    }
}


module.exports = {
    notFoundHandler,
    routeHandler
}