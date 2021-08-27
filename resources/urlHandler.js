const URLFormatter = (config, req) => {
  return requestURL = new URL('http://' + config.host + ':' + config.port + req.url)
}

const queryFormatter = (URL) => {
  const params = new URLSearchParams(URL.search.slice(1));
  const query = {}
  params.forEach((value, key) => {
    query[key] = value;
  })
  return query;
}


module.exports = {
  URLFormatter,
  queryFormatter
}