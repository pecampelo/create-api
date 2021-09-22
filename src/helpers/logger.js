const fs = require('fs');
const path = require('path');

function requestEnd(requestInfo) {
  const { address, pathname, method, bodyRequest, query } = requestInfo;
  console.log('---------------------------------------------------------------------------')
  console.log(`------ ${address} requested the URL - ${pathname} - with a ${method} method`);
  console.log(`------ It had a query and body of:`)
  console.log(query) 
  console.log(bodyRequest)
  console.log('---------------------------------------------------------------------------\n')
}

function anything(data) {
  console.log('\x1b[36m%s\x1b[0m', response);
  console.log(`\n`)
}

function responseEnd() {
  console.log(`\nResponse was sent. Closing response.\n`)
  console.log('...')

}

function saveLog(request, response) {
  const toWrite = {
    "requestMade" : request,
    "responseGiven": response
  }
}

module.exports = {
  anything,
  requestEnd,
  responseEnd,
  saveLog,    
}