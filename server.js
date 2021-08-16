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

        if (route_token === true || route_token === 'possible') {
        // validate HTTP route
                console.log(`Request made by ${user} is allowed.`);

                // Code will come here!



















        } 
        else { notFoundHandler(req, res, method_token, route_token) }
    } 
    else { notFoundHandler(req, res, method_token) }
    console.log(`No more data in response.`)
    res.end();

    // server.once('connection', (req, res) => {
    //     console.log(`User connected from ${user}`);
    // });
});

async function farfetchAPI() {
    setTimeout(() => {
        const request = farfetch.request('get', 'https://api.opendota.com/api/heroes');
        // const requestsMade = [];
        // requestsMade.push(request);






    }, 4000);
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