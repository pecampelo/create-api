function checkLogNecessity(necessity) {
  if (necessity === true) { 
    console.log('Server is online');
  }
  else { 
    console.log('Server is online for testing, no logs needed');
    return;
  }
}

function requestEnd(req) {
  const { address, url, method, body, query } = req;
  console.log('----------------------------------------------------------------------------------------------')
  console.log(`------ ${address} requested the URL - ${url} - with a ${method} method`);
  console.log(`------ It had a query and body of:`)
  console.log(query) 
  console.log(body)
  console.log('----------------------------------------------------------------------------------------------\n')
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