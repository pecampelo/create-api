const { responsePossibilities, keys } = require('./defaultData');

function bodyFormatter(body) {
    if (body === undefined) return '';
    if (body !== '') return body;
    else {}
}

const { apiMessage, endpoints } = responsePossibilities

async function writeMessage(gateway) {
  let messageData;
  if (gateway === 'allowed') messageData = [apiMessage[0], endpoints[0]];
  if (gateway === 'not-found') messageData = [apiMessage[1], endpoints[1]];
  else {} 
  let formattedMessage = await messageFormatter(messageData)
  return formattedMessage
}


function messageFormatter(keys, values) {
  let formattedMessage = {}
  for (let key in keys) {
    let string = key.toString();
    for (let value in values) {
      if (value === string) {
        formattedMessage.key = value;
        break;
      } else {}
    }
  }
}


// write function that checks response possibilities

module.exports = {
    bodyFormatter, 
    messageFormatter
}