let statusCode, urlRequested, bodyRequest, method_token, route_token, bodyResponse;

const responsePossibilities = [
  {
    "apiMessage": [ "Welcome to the _____ API!", "Not Found" ]
  }, 
  {
    "endpoints": [ '/', '/api', '/api/users', '/api/docs' ]
  }, 
  {
    "method_token": [ true, 'possible', false ]
  }, 
  {
    "route_token":  [ true, 'possible', false ]
  }, 
  {
    "bodyResponse": [ '', 'empty', "GET method only, and you can try these endpoints: /api , /api/songs , /api/heroes" ]
  }
]

const keys = []; 

responsePossibilities.forEach((property) => {
  let key = Object.keys(property)[0];
  keys.push(key);
})

const values = [];

responsePossibilities.forEach((property) => {
  let array = Object.values(property)[0];
  values.push(array)
})

console.log(values);


module.exports = {
  responsePossibilities,
  keys
}