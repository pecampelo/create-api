const fs = require('fs');
const queryController = require('./queryController')

const defaultKeys = [], defaultValues = [];

// defaultPossibilities.forEach((property) => {
//   let valueArrays = Object.values(property)[1];
//   let key = Object.keys(property);
//   defaultKeys.push(key);
//   defaultValues.push(valueArrays);
// })

function sendFile(pathname) {
  if (pathname === '/api') {
    return fs.readFileSync('../create-api/database/heroes.json', 'utf-8');
  }
  if (pathname === '/api/users') {
    return fs.readFileSync('../create-api/database/data.json', 'utf-8');
  }
  else {
    return undefined;
  }
}

// function storeMessage(defaultKeys, defaultValues, data) {
//   let formattedMessage = {}
//   for (let key in keys) {
//     let string = key.toString();
//     for (let value in values) {
//       if (value === string) {
//         formattedMessage.key = value;
//         break;
//       } else {}
//     }
//   }
// }

// write function that checks defaulter

// if not in defaulter and it is allowed, it should store the data in a variable
// that will request to pull variable into response possibilities.

module.exports = { 
  sendFile
}