const server = require('./server/server')
const { config } = require('./server/config')

const app = () => {
  let listening;
  server.listen(config, () => { 
    if (server.listening === true) {
      console.log('...')
      console.log(`Server is running on ${config.host}:${config.port}`);
      console.log('...')
    } else { 
      console.log (`Something wrong happened!`)
    }
  })
}

app();

module.exports = app;