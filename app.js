const { startServer } = require('./server');
const test = require('./tests/testHandler')

const options = {
    port: process.env.PORT || 8001,
    host: process.env.HOST || '127.0.0.1',
    exclusive: true,
    backlog: process.env.BACKLOG || 2
}

startServer(options);