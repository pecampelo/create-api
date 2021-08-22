const { sendMessage } = require('./messager');

function handler(req, userSocket) {
  const { entry } = userSocket;
  if (entry === 'allowed' || 'denied') {
    const message = sendMessage(entry, req, userSocket);
    return message;
  } 
  if (entry === 'not-found') {
    const message = notFoundHandler(req, userSocket) 
    return message;
  }
  else {
    return console.log('Error!')
  }
}

function notFoundHandler(req, userSocket) {
  userSocket.route_token = route_token === '' ? '?' : route_token;
  const message = sendMessage('not-found', req, userSocket);
  return message;
} 

module.exports = { handler }