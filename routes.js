function routeHandler(req, res) {
    if (req.url === '/' && req.method === "GET") {
        res.write(JSON.stringify({
            "message": "Hello World!",    
            "urlRequested": req.url,
            "bodyRequest": `${req.body}`,
        }));
    } else {
        res.write(JSON.stringify({
            "message": "Not Found",    
            "urlRequested": req.url
        }));
    }
    res.end();
}

module.exports = {
    routeHandler
}