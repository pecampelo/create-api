const URLFormatter = async (config, req) => {
  return requestURL = new URL('http://' + config.host + ':' + config.port + req.url)
}

const queryFormatter = async (URL) => {
  const params = new URLSearchParams(URL.search.slice(1));
  const query = {}
  params.forEach((value, key) => {
    query[key] = value;
  })
  return query;
}

const bodyGetter = async (req) => {
  
  let buffers = []
  
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  if (buffers.entries === 0) return; 
  else {}
  
  const data = Buffer.concat(buffers).toString();
  const body = await JSON.parse(data);
  return body;
}


module.exports = {
  URLFormatter,
  queryFormatter,
  bodyGetter
}