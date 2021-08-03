const http = require('http');
const net = require('net');
const os = require('os');

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
        }));
        res.end();
    } else {
        res.write(`Not Found - ${req.url}`);
        res.end();
    }
})

const startServer = (PORT, HOST, BACKLOG) => {
    server.listen({
        port: PORT, 
        host: HOST, 
        exclusive: true 
    }, BACKLOG,
        () => {
        console.log(`Attempting to run server at http://${HOST}:${PORT}`)
    });
}


// server.on('connection', () => {
//     const options = {
//         hostname: "api.opendota.com",
//         path: '/api/heroes',
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//     }}

//     const newRequest = http.request(options, res => {
//         console.log(res.statusCode);
//         res.on('data', newData => {
//             process.stdout.write(newData)
//         })
//     })
//     newRequest.on('error', error => {
//         console.error('This request was not successful', error.stack);
//     })
//     let heroes = newRequest;
//     console.log(heroes.body)
// });   

module.exports = startServer;