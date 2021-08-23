function requestEnded(socket) {
  console.log(`${socket.address} requested the URL - ${socket.request[0]} - with a ${socket.request[1]} method.`);
  console.log(`${socket.address} made that request with a body of: ${socket.bodyRequest}
  `);
}

function responseEnded() {
  console.log(`Response was sent. Closing response.`) 
  console.log('...')
}

module.exports = {
  requestEnded,
  responseEnded
}