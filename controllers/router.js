const { sendMessage } = require('./messager');

async function handler(req, userSocket) {
  const { entry } = userSocket;
  let message = '';
  if (entry === 'allowed' || 'denied') { return message = sendMessage(entry, req, userSocket); }
  if (entry === 'not-found') { return message = notFoundHandler(req, userSocket); }
  else {  return console.log('Error!')  }
}

function notFoundHandler(req, userSocket) {
  userSocket.route_token = route_token === '' ? '?' : route_token;
  const message = sendMessage('not-found', req, userSocket);
  return message;
} 

module.exports = { handler }