const http = require('http');
const net = require('net');
const os = require('os');
const APIRequests = require('./APIRequests');

// const keepAliveAgent = new http.Agent({ 
//     keepAlive: true,
//     maxSockets: 10
// });


const server = http.createServer((req, res) => {
    res.removeHeader('Connection');
    res.removeHeader('X-Powered-By');
    res.writeHead(200, { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '',
    });
    if (req.url === '/' && req.method === "GET") {
        res.write(JSON.stringify({
            "message": "Hello World!",    
            "urlRequested": req.url,
            "bodyRequest": `${req.body}`,
        }));
        console.log('Will make API request to OpenDota!');
        APIRequests.getFrom('https://api.opendota.com/api/heroes');
    } else {
        res.write(JSON.stringify({
            "message": "Not Found",    
            "urlRequested": req.url
        }));
    };
    res.end();
})

const startServer = (PORT, HOST, BACKLOG) => {
    server.listen({
        port: PORT, 
        host: HOST, 
        exclusive: true 
    }, BACKLOG,
        () => {
        console.log(`Attempting to run server at http://${HOST}:${PORT}`);
    });
//     server.once('connection', (request) => {
// }); 
}

module.exports = startServer;