const config = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 8001,
  exclusive: true,
  backlog: process.env.BACKLOG || 2
}

// TODO: Change to allowed 
const endpoints = [
  '/api',
  '/api/users',
  '/api/locations'
]

const parameters = [
  'user',
  'hero',
  'email',
  'location'
]

module.exports = {
  endpoints,
  parameters
}


module.exports =  { 
  config,
  endpoints,
  parameters
}