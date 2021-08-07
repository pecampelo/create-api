const http = require('http');
const https = require('https');
const farfetch = require('./farfetch');
const { methodHandler } = require('./methods');
const { routeHandler, notFoundHandler, ignoreFavicon } = require('./routes');

const headerOptions = (req, res) => {
    res.removeHeader('Connection', 'X-Powered-By');
    res.writeHead(200, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '' })
}

const server = http.createServer((req, res) => {
    // `req` is an http.IncomingMessage, which is a readable stream.
    // `res` is an http.ServerResponse, which is a writable stream.

    let permissions = {
        'method_token' : '',
        'route_token': ''
    };
    console.log(permissions[0]);
    // declare clearance token so it can inherit tokens from functions.
    headerOptions(req, res);
    // give headers to response;
    let method_token = methodHandler(req, res);
    permissions.method_token = method_token;
    if (method_token === 'granted') {
        
        let route_token = routeHandler(req, res);
        permissions.route_token = route_token;
        
        if (route_token === 'granted') {
            farfetch.getRequest('https://api.opendota.com/api/heroes');






            
        } else { notFoundHandler() }
    } else { notFoundHandler() }
    res.end();
})

const startServer = (PORT, HOST, BACKLOG) => {
    server.listen({
        port: PORT, 
        host: HOST, 
        exclusive: true 
        }, 
        BACKLOG,
        () => { console.log(`Server is running at http://${HOST}:${PORT}`) }
    );

    server.on('connection', (req, res) => {
        console.log('A user made a request');
    });
}

module.exports = {
    startServer
}