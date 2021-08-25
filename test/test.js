const { Test } = require('./testHandler');


const test1 = new Test('Server is listening', 1, 1)
const test2 = new Test('Request is being received', 2, 3);
const test3 = new Test('Params are read', 2, 2)
const test4 = new Test('API Token is checked', 2, 2);
const test5 = new Test('API enables access to user with Token', 1, 1);
const test6 = new Test('GET Request to correct endpoint', 1, 1);
const test7 = new Test('GET Request to wrong endpoint', 1, 1);
const test8 = new Test('!GET Request to correct endpoint', 1, 1)
const test9 = new Test('!GET Request to wrong endpoint', 1, 1);
const test10 = new Test('!GET Request to wrong endpoint', 1, 1);

test1.test();
test2.test();
test3.test();
test4.test();
test5.test();
test6.test();
test7.test();
test8.test();
test9.test();
test10.test()







// assert.strictEqual('server is listening', 'server.listening is true', '✅');
// assert.strictEqual('request is received', 'request was received');
// assert.strictEqual('params are read by the server, params are not undefined');
// assert.strictEqual('api_token is checked, checkAPIAccessToken returns a boolean');
// assert.strictEqual() 


// assert.strictEqual('request is received', 'request was received');



