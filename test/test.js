const { Taestro, expect } = require('./taestro');
const server = require('../server/server')
const requestInfo = require('../server/server')
const { config } = require('../server/config')


const test = new Taestro();

// it('should show server is listening on config.port', 1, 1)
test.should('show server is listening', async () => {
  const myServer = await server.listen(config);
  let result;

  expect(myServer.listening).toBe(true)
})

test.should('receive a request from an user', () => {
  const myServer = await server.listen(config);
  const request = http.request(`http://${config.host}:${config.port}`);
  // const requestReceived = 
  
  // if(requestReceived )
  

});

test.should('format requestedURL into requestInfo', () => {

});

test.should('read parameters of a request', () => {

});

test.should('read a userSocket with blank values', () => {

});

test.should('not log a /favicon.ico a /favicon.ico request', () => {

});


test.should('listen to request ending and log it', () => {

});

test.should('get method_token', () => {

});

test.should('get route_token', () => {

});

test.should('check API Token', () => {

});

test.should('enable API access to specific route if Token is valid', () => {

});

test.should('disable API access to specific route if Token is invalid', () => {

});

test.should('allow GET Request to correct endpoint', () => {

});

test.should('allow GET Request to wrong endpoint', () => {

});

test.should('allow !GET Request to correct endpoint', () => {

})

test.should('allow !GET Request to wrong endpoint', () => {

});

test.should('change response header options', () => {

});

test.should('send a response to the user', () => {

});

test.should('log that response ended', () => {

});

test.should('show response in API', () => {

});



