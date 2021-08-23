const { defaultKeys, defaultValues } = require('../models/formatter');
const filehandler = require('./filehandler')

function sendMessage(entry, req, userSocket) {
  const endpoint = req.url
  const { bodyRequest, method_token, route_token } = userSocket;
  const userValues = [endpoint, bodyRequest, method_token, route_token];
  const message = formatMessage(entry, userValues);
  const formattedMessage = JSON.stringify(message);
  return formattedMessage;
}

function bodyFormatter(body) {
  if (body === undefined) return '';
  if (body !== '') return body;
  else {}
}


// TODO: change output based on Url requested;
const bodyResponse = filehandler.read('./data/heroes.json')

function formatMessage(entry, data) {
  let message;
  // let bodyResponse = await filehandler.read('./data/heroes.json')
  if (entry === 'allowed') { 
    message = {
      [defaultKeys[0][1]]: defaultValues[0][0] + ' 🎈', 
      [defaultKeys[1][1]]: data[0],
      [defaultKeys[2][1]]: bodyFormatter(data[1]),
      [defaultKeys[3][1]]: data[2],
      [defaultKeys[4][1]]: data[3],
      [defaultKeys[5][1]]: data[4],
      [defaultKeys[6][1]]: bodyResponse + ' 🎈',
    }
    return message;
  }
  if (entry === 'denied') {
    message = {
      [defaultKeys[0][1]]: defaultValues[0][0] + ' 🎈', 
      [defaultKeys[1][1]]: data[0],
      [defaultKeys[2][1]]: bodyFormatter(data[1]),
      [defaultKeys[3][1]]: data[2],
      [defaultKeys[4][1]]: defaultValues[4][3],
      [defaultKeys[5][1]]: data[4],
      [defaultKeys[6][1]]: defaultValues[6][4][0],
    }
    return message;
  }
  if (entry === 'not-found') {
    message = {
      [defaultKeys[0][1]]: defaultValues[0][1] + ' 🎈', 
      [defaultKeys[1][1]]: data[0],
      [defaultKeys[2][1]]: bodyFormatter(data[1]),
      [defaultKeys[3][1]]: data[2],
      [defaultKeys[4][1]]: defaultValues[4][3],
      [defaultKeys[5][1]]: data[4],
      [defaultKeys[6][1]]: defaultValues[6][4],
    }
    return message;
  }
  else {  }
}

module.exports = {
    sendMessage,
    formatMessage
}