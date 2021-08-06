const { startServer } = require('./server');

const PORT = process.env.PORT || 8001;
const HOST = process.env.HOST || 'localhost';
const BACKLOG = process.env.BACKLOG || 2;

startServer(PORT, HOST, BACKLOG);