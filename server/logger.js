const fs = require('fs');
const path = require('path');

function requestEnded(req) {
  console.log(`${req.address} requested the URL - ${req.pathname} - with a ${req.method} method.`);
  console.log(`${req.address} made that request with a body of 
  `);
}

function data(response) {
  console.log('\x1b[36m%s\x1b[0m', response);
  console.log(`\n`)
}

function responseEnded() {
  console.log(`Response was sent. Closing response.`) 
  console.log('...')
}

function saveLog(request, response, logFile) {
  const toWrite = {
    "requestMade" : request,
    "responseGiven": response
  }
}

module.exports = {
  requestEnded,
  responseEnded,
  saveLog,    
  data
}