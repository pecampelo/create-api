const fs = require('fs');
const { sendFile } = require('../controllers/userController');

async function sendResponse(requestInfo, userSocket) {
  const { pathname } = requestInfo;
  const file = sendFile(pathname)

  // TODO : query controller callback;
  // TODO : API token callback;
  const response = await formatResponse(requestInfo, userSocket, file)
  const formattedResponse = JSON.stringify(response);
  return formattedResponse;
}


async function formatResponse(userSocket, file) {
  let response;
  if (userSocket.entry === 'allowed') { 
    response = {
      "apiMessage": "Welcome to my API! 🎈",
      "request": requestInfo,
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      "message": [
        'Response! 🎈',
        JSON.parse(file)
      ]
    }
    return response;
  }
  if (userSocket.entry === 'denied') {
    response = {
      "apiMessage": "Access denied! 😡",
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      // `Check if ${api_key} is valid`
      "message": [
        "Please only use GET method",
      ]

    }
    return response;
  }
  if (userSocket.entry === 'not-found') {
    response = {
      "apiMessage": "Not Found! 😔",
      "method_token": userSocket.method_token,
      "route_token": userSocket.route_token,
      "entry": userSocket.entry,
      // "api_key": userSocket.api_key,
      "message": [
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