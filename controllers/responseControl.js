const { endpoints } = require('../server/config')

async function sendResponse(requestInfo, userSocket) {

  // TODO FETCH DATA FROM JSON
  const response = await formatResponse(requestInfo, userSocket)
  const formattedResponse = JSON.stringify(response);
  return formattedResponse;
}

function bodyFormatter(body) {
  if (body === undefined) return '';
  if (body !== '') return body;
  else {}
}

function formatResponse(requestInfo, userSocket) {
  let response;
  if (userSocket.entry === 'allowed') { 
    response = {
      "apiMessage": "Welcome to my API! 🎈",
      "request": requestInfo,
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      "bodyResponse": 'Response! 🎈',
    }
    return response;
  }
  if (userSocket.entry === 'denied') {
    response = {
      "apiMessage": "Access denied! 😡",
      "request": requestInfo,
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      "bodyResponse": [
        "Please only use GET method",
        // `Check if ${api_key} is valid`
      ]

    }
    return response;
  }
  if (userSocket.entry === 'not-found') {
    response = {
      "apiMessage": "Not Found! 😔",
      "request": requestInfo,
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      "bodyResponse": [
        "Please only use GET method", 
        'You can try these endpoints:', 
        endpoints],
    }
    return response;
  }
  else {}
}

module.exports = {
    sendResponse,
    formatResponse
}