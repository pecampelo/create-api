const fs = require('fs');
const { defaultPossibilities } = require('../resources/responses');

function read(file) {
  const output = fs.readFileSync(file, 'utf-8', (err, contents) => {
  return JSON.parse(String(contents));
  });
}

const defaultKeys = [], defaultValues = [];

defaultPossibilities.forEach((property) => {
  let valueArrays = Object.values(property)[1];
  let key = Object.keys(property);
  defaultKeys.push(key);
  defaultValues.push(valueArrays);
})

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
    defaultKeys, 
    defaultValues,
    read
}