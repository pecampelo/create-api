/* eslint-disable no-unused-vars */
const MainController = require('../controllers/endpointController');
const UserController = require('../controllers/userController');

class Route {
	constructor(endpoint, method, handler) {
		this.endpoint = endpoint;
		this.method = method;
		this.handler = handler;
		Route.instances.push(this);
	}
}

Route.instances = [];

// TODO: Try to center all endpoints into one.

const endpointsRoute = 	new Route('/', 						'GET', 		MainController.listEndpoints);
const listUsers = 			new Route('/users', 			'GET', 		UserController.listUsers);
const createUser = 			new Route('/users', 			'POST', 	UserController.createUser);
const	getUserByName = 	new Route('/users/:name', 'GET', 		UserController.getUserByName);
const getUserById = 		new Route('/users/:id', 	'GET', 		UserController.getUserById);
const updateUser = 			new Route('/users/:id', 	'PUT', 		UserController.updateUser);
const deleteUser = 			new Route('/users/:id', 	'DELETE', UserController.deleteUser);

console.log('\n');
console.table(Route.instances);

module.exports = Route.instances;

// const queryController = (requestInfo, userSocket) => {

// TODO: Check database for file,
// if there is none,
// return denied
// If there is,
// check for private or public.
// If public,
// return allowed;
// If private and there is an API key,
// return allowed
// If private and no API Key or incorrect API Key,
// return denied;
// If else
// return ?
// }

// const bodyController = (requestInfo, userSocket) => {

// TODO: Check database for file,
// if there is none,
// return denied
// If there is,
// check for private or public.
// If public,
// return allowed;
// If private and there is an API key,
// return allowed
// If private and no API Key or incorrect API Key,
// return denied;
// If else
// return ?
// }

// async function router (requestInfo, userSocket) {

//   const { method_token, route_token } = userSocket;

//   if ( method_token === true  && route_token === true ) {
//     userSocket.entry = 'allowed';
//     return response = await messager.sendResponse(requestInfo, userSocket);
//   }

//   if (( method_token === false || 'possible' ) && route_token === true) {
//     userSocket.entry = 'denied';
//     return response = await messager.sendResponse(requestInfo, userSocket);
//   }

//   else {
//     userSocket.entry = 'not-found';
//     return response = await messager.sendResponse(requestInfo, userSocket);
//   }
//
