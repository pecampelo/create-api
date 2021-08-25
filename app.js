const { startServer } = require('./server/server');
const test = require('./test/test')
const { config } = require('./server/config')

const run = async () => {
  // await test()
  startServer(config)
}
startServer(config);

run();

