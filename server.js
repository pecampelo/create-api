const http = require('http');
const https = require('https');
const farfetch = require('./farfetch');
const { routeHandler } = require('./routes');

const headerOptions = (req, res) => {
    res.removeHeader('Connection', 'X-Powered-By');
    res.writeHead(200, { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '' })
}

const server = http.createServer((req, res) => {
    // `req` is an http.IncomingMessage, which is a readable stream.
    // `res` is an http.ServerResponse, which is a writable stream.
    headerOptions(req, res);
    let routePermission;
    routeHandler(req, res);
    farfetch.getRequest('https://api.opendota.com/api/heroes');
    res.end();
})

const startServer = (PORT, HOST, BACKLOG) => {
    server.listen({
        port: PORT, 
        host: HOST, 
        exclusive: true 
        }, 
        BACKLOG,
        () => { console.log(`Attempting to run server at http://${HOST}:${PORT}`) }
    );

    server.once('connection', (req, res) => {
        console.log('A user made a request');
    });
}

module.exports = {
    startServer
}