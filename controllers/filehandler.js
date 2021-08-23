const fs = require('fs');


async function read(file) {
  const output = fs.readFileSync(file, 'utf-8', (err, contents) => {
  return JSON.parse(String(contents));
  });
}

module.exports = {
  read
}