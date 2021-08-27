const fs = require('fs');
const path = require('path');

function requestEnd(req) {
  console.log(`\n${req.address} requested the URL - ${req.pathname} - with a ${req.method} method.\n`);
  console.log('...')
  // console.log(`${req.address} made that request with a body of : \n \n ${req.bodyRequest} `);
}

function anything(data) {
  console.log('\x1b[36m%s\x1b[0m', response);
  console.log(`\n`)
}

function request(data){

}

function response(data){

}

function responseEnd() {
  console.log(`\nResponse was sent. Closing response.\n`)
  console.log('...')

}

function saveLog(request, response, logFile) {
  const toWrite = {
    "requestMade" : request,
    "responseGiven": response
  }
}

module.exports = {
  anything,
  request, 
  response,
  requestEnd,
  responseEnd,
  saveLog,    
  
}