const { endpoints } = require('../data/endpoints')

const defaultPossibilities = [
  {
    "id": 0,
    "apiMessage": [ "Welcome to my API!", "Not Found 🎁" ]
  }, 
  {
    "id": 1,
    "request": endpoints
  }, 
  {
    "id": 2,
    "bodyRequest": [ '', 'empty' ]
  },
  {
    "id": 3,
    "method_token": [ true, 'possible', false ]
  }, 
  {
    "id": 4,
    "route_token":  [ true, 'possible', false, '?' ]
  }, 
  {
    "id": 5,
    "entry":  [ 'allowed', 'denied', 'not-found' ]
  },
  { 
    "id": 6,
    "bodyResponse": [ 
      undefined, 
      '' , 
      'empty', 
      'Response will come here', 
      ["Please only use GET method", `You can try these endpoints: `, endpoints]]
  }, 
  { 
    "id": 7,
    "api_key": [ 'valid', 'invalid' ]
  }, 
]

module.exports = {
  defaultPossibilities
}