function requestEnded(socket) {
  console.log(`${socket.address} requested the URL - ${socket.request[0]} - with a ${socket.request[1]} method.`);
  console.log(`${socket.address} made that request with a body of: ${socket.bodyRequest}
  `);
}

function data(response) {
  console.log('\x1b[36m%s\x1b[0m', response);
  console.log(`\n`)
}

function responseEnded() {
  console.log(`Response was sent. Closing response.`) 
  console.log('...')
}

module.exports = {
  requestEnded,
  responseEnded,    
  data
}