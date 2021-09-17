const server = require('./server/server')
const { config } = require('./server/config')

server.listen(config, () => { 
  if (server.listening === true) {
    console.log('...')
    console.log(`Server is running on ${config.host}:${config.port}`);
    console.log('...')
  } else { 
    console.log (`Something wrong happened!`)
  }
})

