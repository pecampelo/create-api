const UserController = require('../controllers/userController');
const MainController = require('../controllers/endpointController');

module.exports = [
	{
		'endpoint': '/',
		'method': 'GET',
		'handler': MainController.listEndpoints,
	},
	{
		'endpoint': '/users',
		'method': 'GET',
		'handler': UserController.listUsers,
	},
	{
		'endpoint': '/users/:id',
		'method': 'GET',
		'handler': UserController.getUserById,
	},
	{
		'endpoint': '/users/:name',
		'method': 'GET',
		'handler': UserController.getUserByName,
	},
	{
		'endpoint': '/users',
		'method': 'POST',
		'handler': UserController.createUser,
	},
	{
		'endpoint': '/users/:id',
		'method': 'PUT',
		'handler': UserController.updateUser,
	},
	{
		'endpoint': '/users/:id',
		'method': 'DELETE',
		'handler': UserController.deleteUser,
	},

];

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
