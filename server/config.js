const config = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 8001,
  exclusive: true,
  backlog: process.env.BACKLOG || 2
}

module.exports =  { config }