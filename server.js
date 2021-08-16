const http = require('http');
const app = require('./app');
const farfetch = require('./farfetch');
const { routeHandler, notFoundHandler, methodHandler } = require('./routes');

const headerOptions = (req, res) => {
    res.removeHeader('Connection', 'X-Powered-By');
    res.writeHead(200, { 
        "Content-Type": "application/json", 
        'Access-Control-Allow-Origin': '' })
}

const server = http.createServer((req, res) => {
    //
    // Request =>> `req` is an http.IncomingMessage, which is a readable stream.
    //
    // UserSocket =>>  
    // object used to store tokens and general server information
    // that can be stored and later used or inherited.
    // 
    const userSocket = {
        address: req.socket.localAddress + ':' + req.socket.localPort,
        password_token: false,
        method_token: '',
        route_token: '', 
    }
    

    userSocket.method_token = methodHandler(req);    
    // Launch method handler to validate.

    headerOptions(req, res);
    // give headers to response;

    if (userSocket.method_token === true ) {                       // validate HTTP request method
        userSocket.route_token = routeHandler(req, res, userSocket);
        
        if (userSocket.route_token === true || userSocket.route_token === 'possible') { // validate HTTP route
      
                console.log(`Request made by ${userSocket.address} is allowed.`);

                // `res` is an http.ServerResponse, which is a writable stream.

                // Code will come here!








        } 
        else { notFoundHandler(req, res, userSocket) }
    } 
    else { notFoundHandler(req, res, userSocket) }
    




    console.log(`No more data in response.`)
    res.end();

    server.on('connection', (stream) => {
        console.log(`User from ${userSocket.address} has connected`);
    });
});

async function startServer(options) {
    server.listen(options, () => { 
        if (server.listening === true) {
            console.log(`Server is running on ${options.host}:${options.port}`);
        } else { 
            console.log (`Something wrong happened!`)
        }
    }) 
}

module.exports = {
    startServer
}