const requestOptions = (req) => {
  let headers = req.headers;
  // TODO - add if statement that extracts req.headers[authToken]
}


const responseOptions = (entry, res) => { 
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
  requestOptions,
  responseOptions
}