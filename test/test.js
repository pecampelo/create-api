/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const assert = require('assert');
const { options } = require('../src/config');
const server = require('../src/server');

server.listen(options);

describe('Server', () => {
	it('should report that server is listening', () => {
		const result = server.listening;
		const expected = true;
		assert.equal(result, expected);
	});
	it('should be hosting on intended host and port', () => {
		const address = server.address();
		const result = 'http://127.0.0.1:8001';
		const expected = `http://${address.address}:${address.port}`;
		assert.equal(result, expected);
	});
});

// TIPO 1

// const test1 = new Test(`should listen to requests in ${config.host}:${config.port}/`,
// server.listening, true);

// test1.test()

// TIPO 2

// should(`read a request`, () => {
//   server.listen(config)
//    http.request(`http://${config.host}:${config.port}/`, (res) => {
//     const chunks = []
//     res.on('data', (chunk) => chunks.push(chunk));

//     res.on('end', async () => {
//       const result = chunks.join('');
//       const expected = JSON.stringify({
//         "apiMessage": "Not Found! 😔",
//         "request": {
//           "href": "http://127.0.0.1:8001/",
//           "address": "127.0.0.1:8001",
//           "pathname": "/",
//           "method": "GET",
//           "query": {}
//         },
//         "method_token": true,
//         "route_token": false,
//         "entry": "not-found",
//         "bodyResponse": [
//           "Please only use GET method",
//           "You can try these endpoints:",
//           [
//             "/api",
//             "/api/users",
//             "/api/locations"
//           ]
//         ]
//       })
//       expect(result).toBe(expected)
//     })
//   }).end();
//   server.close();
// });

// test.should('receive a request from an user', () => {
//   // const myServer = await server.listen(config);
//   // const request = http.request(`http://${config.host}:${config.port}`);
//   // // const requestReceived =

//   // // if(requestReceived )

// });

// test.should('format requestedURL into requestInfo', () => {

// });

// test.should('read parameters of a request', () => {

// });

// test.should('read a userSocket with blank values', () => {

// });

// test.should('not log a /favicon.ico a /favicon.ico request', () => {

// });

// test.should('listen to request ending and log it', () => {

// });

// test.should('get method_token', () => {

// });

// test.should('get route_token', () => {

// });

// test.should('check API Token', () => {

// });

// test.should('enable API access to specific route if Token is valid', () => {

// });

// test.should('disable API access to specific route if Token is invalid', () => {

// });

// test.should('allow GET Request to correct endpoint', () => {

// });

// test.should('allow GET Request to wrong endpoint', () => {

// });

// test.should('allow !GET Request to correct endpoint', () => {

// })

// test.should('allow !GET Request to wrong endpoint', () => {

// });

// test.should('change response header options', () => {

// });

// test.should('send a response to the user', () => {

// });

// test.should('log that response ended', () => {

// });

// test.should('show response in API', () => {

// });
