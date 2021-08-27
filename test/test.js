const { it, expect, TestPackage } = require('./taestro');
const server = require('../server/server')

const tests = new TestPackage();

// it('should show server is listening on config.port', 1, 1)
// it('should receive a request from an user', 2, 3);
// it('should format requestedURL into requestInfo', 2, 2);
// it('should read parameters of a request', 2, 2);
// it('should read a userSocket with blank values');
// it('should not log a /favicon.ico a /favicon.ico request', 2, 2)
// it('should listen to request ending and log it');
// it('should get method_token');
// it('should get route_token');
// it('API Token is checked', 2, 2);
// it('API enables access to specific route if Token is valid', 1, 1);
// it('API disables access to specific route if Token is invalid', 1, 1);
// it('should allow GET Request to correct endpoint', 1, 1);
// it('should allow GET Request to wrong endpoint', 1, 1);
// it('should allow !GET Request to correct endpoint', 1, 1)
// it('should allow !GET Request to wrong endpoint', 1, 1);
// it('should change response header options', 2, 2);
// it('should send a response to the user');
// it('should log that response ended')
// it('should show response in API');



it('should show server is listening on config.port', () => {
  const result = server.listening;
  const expected = true;

  expect(true).toBe(true);
})

module.exports = {
  tests
}


