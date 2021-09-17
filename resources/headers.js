function requestHeaderOptions(req, res) {
  if (req.url === 'favicon.ico') {
    return res.end()
  }
  // const headers = req.headers;
  // let { api_token = '' } = req.headers;
  
  // function checkAPIAccessToken() {
  //   return permission === false;
  // }

  // TODO - add if statement that extracts req.headers[authToken]
}

function responseHeaderOptions(entry, res) { 
  let statusCode;
  if (entry === 'allowed') statusCode = 200;
  if (entry === 'denied') statusCode = 403;
  if (entry === 'not-found') statusCode = 404;
  res.writeHead(statusCode, { 
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '',
      'Connection': 'close',
      "X-Content-Type-Options": "nosniff"
  })   
}
// `res` is an http.ServerResponse, which is a writable stream.

module.exports = { 
  requestHeaderOptions,
  responseHeaderOptions
}