const http = require('http');
const farfetch = require('./farfetch');
const { methodHandler } = require('./methods');
const { routeHandler, notFoundHandler, ignoreFavicon } = require('./routes');

const headerOptions = (req, res) => {
    res.removeHeader('Connection', 'X-Powered-By');
    res.writeHead(200, { 
        "Content-Type": "application/json", 
        'Access-Control-Allow-Origin': '' })
}

const server = http.createServer((req, res) => {
    // Request
    //
    // `req` is an http.IncomingMessage, which is a readable stream.
    //
    let user = `${req.socket.localAddress}:${req.socket.localPort}`;
    let method_token, route_token;
    // declare token so it can store tokens inherited from functions.

    method_token = methodHandler(req);
    // `res` is an http.ServerResponse, which is a writable stream.
    headerOptions(req, res);
    // give headers to response;

    if (method_token === true ) {
    // validate HTTP request method
        route_token = routeHandler(req, res, method_token);

        if (route_token === true) {
        // validate HTTP route
            console.log(`Request made by ${user} is doable. Will give a response`);

            startAPI();
            // API features to be added here.













        } else {

            notFoundHandler(req, res)  
        }

    } else {   

        notFoundHandler(req, res)  

    }
    res.end();

    // server.once('connection', (req, res) => {
    //     console.log(`User connected from ${ip}:${port}`);
    // });
});

const startAPI = () => {
    setTimeout(() => {
        const request = farfetch.request('get', 'https://api.opendota.com/api/heroes');
        // const requestsMade = [];
        // requestsMade.push(request);






    }, 2000);
}

const startServer = (PORT, HOST, BACKLOG) => {
    server.listen({ port: PORT, host: HOST, exclusive: true}, 
        BACKLOG, 
        () => { 
            console.log(`Server is running at http://${HOST}:${PORT}`) 
    }) 
}

module.exports = {
    startServer
}