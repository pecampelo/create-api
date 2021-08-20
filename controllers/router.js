const { sendMessage } = require('./messager');
const { entryTokenHandler, routeTokenHandler, methodTokenHandler } = require('./tokens');

function getTokens(req, userSocket) {
  try {
    userSocket.method_token = methodTokenHandler(req, userSocket);    
    console.log(userSocket.method_token + '🎈')
    userSocket.route_token = routeTokenHandler(req, userSocket);
    console.log(userSocket.route_token + '🎈🎈')
    userSocket.entry = entryTokenHandler(userSocket);
    console.log(userSocket.entry + '🎈🎈🎈')
  } catch (err) {
    console.log(err.stack) 
  }
}

function handler(req, userSocket) {
  const { entry } = userSocket
  if (entry === 'allowed' || 'denied') {
    return message = sendMessage(entry, req, userSocket);
  } else { return notFoundHandler(req, userSocket) }
}

function notFoundHandler(req, userSocket) {
  userSocket.route_token = route_token === '' ? '?' : route_token;
  return message = sendMessage('', req, userSocket);
} 

module.exports = {
    getTokens,
    handler
}