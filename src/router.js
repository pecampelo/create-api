const messager = require('./messager');
const UserController = require('../controllers/userController')
const MainController = require('../controllers/mainController')

module.exports = [
  {
    endpoint: '/',
    method: 'GET',
    handler: MainController.listEndpoints
  },
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById
  },
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.getUserByName
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser
  },

  
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
 
]