const { defaultKeys, defaultValues } = require('../models/formatter') 

async function sendMessage(entry, req, userSocket) {
  const endpoint = req.url, bodyRequest = req.body, { method_token, route_token } = userSocket;
  const data = [endpoint, bodyRequest, method_token, route_token];
  const message = await formatMessage(entry, data);
  const formattedMessage = await JSON.stringify(message);
  return formattedMessage;
}

function bodyFormatter(body) {
  if (body === undefined) return '';
  if (body !== '') return body;
  else {}
}

async function formatMessage(entry, data) {
  let message;
  if (entry === 'allowed') { 
    message = {
      [defaultKeys[0]]: defaultValues[0][0] + '🎈', 
      [defaultKeys[1]]: data[0],
      [defaultKeys[2]]: bodyFormatter(data[1]),
      [defaultKeys[3]]: defaultValues[3][0],
      [defaultKeys[4]]: data[2],
      [defaultKeys[5]]: data[3]
    }
    return message;
  }
  if (entry === 'denied') {
    message = {
      [defaultKeys[0]]: defaultValues[0][1], 
      [defaultKeys[1]]: data[0],
      [defaultKeys[2]]: bodyFormatter(data[1]),
      [defaultKeys[3]]: bodyFormatter(defaultValues[3][0]),
      [defaultKeys[4]]: data[2],
      [defaultKeys[5]]: data[3]    
   }
  }
  if (entry === 'not-found') {
    message = {
      [defaultKeys[0]]: defaultValues[0][1], 
      [defaultKeys[1]]: data[0],
      [defaultKeys[2]]: bodyFormatter(data[1]),
      [defaultKeys[3]]: bodyFormatter(defaultValues[3][0]),
      [defaultKeys[4]]: data[2],
      [defaultKeys[5]]: data[3]    
    }
  }
  else {  }
}

module.exports = {
    sendMessage,
    formatMessage
}