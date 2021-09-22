const endpoints = require('../mocks/endpoints')

module.exports = {
  listEndpoints(req, res) {
    
    const { order } = req.query;

    const sortedEndpoints = endpoints.sort((a, b) => {
      a = a.toLowerCase(), b = b.toLowerCase();
      if (order === 'desc') {
        return a > b ? 1 : -1;
      } else {
        return a < b ? 1 : 1;
      }
    })

    res.send(200, sortedEndpoints)
  },
  addEndpoint(req, res) {
    // TODO
  }
}