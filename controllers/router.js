const responseController = require('./responseControl');

async function handler(requestInfo, userSocket) {
  const { method_token, route_token } = userSocket;
  const { query } = requestInfo

  // TO DO = query controller

  if ( method_token === true  && route_token === true ) {
    userSocket.entry = 'allowed';
    return response = await responseController.sendResponse(requestInfo, userSocket); 
  } 

  if (( method_token === false || 'possible' ) && route_token === true) {
    userSocket.entry = 'denied';
    return response = await responseController.sendResponse(requestInfo, userSocket); 
  }

  else { 
    userSocket.entry = 'not-found';    
    return response = await responseController.sendResponse(requestInfo, userSocket);
  }
  
}

function entryTokenHandler(userSocket) {
  let entry;
  const { method_token, route_token } = userSocket;
  if ( method_token === true  && route_token === true ) {
    return entry = 'allowed';
  } 
  if (( method_token === false || 'possible' ) && route_token === true) {
    return entry = 'denied';
  }
  else { 
    return entry = 'not-found';
  }
}

module.exports = { handler }