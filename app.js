const startServer = require('./server');

const PORT = 8001;
const HOST = 'localhost';
const BACKLOG = 2;

startServer(PORT, HOST, BACKLOG);