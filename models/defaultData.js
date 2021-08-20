const defaultPossibilities = [
  {
    "apiMessage": [ "Welcome to the Restaurant API!", "Not Found 🎁" ]
  }, 
  {
    "endpoints": [ '/', '/api', '/api/users', '/api/docs' ]
  }, 
  {
    "bodyRequest": [ '', 'empty', "GET method only, and you can try these endpoints: /api , /api/songs , /api/heroes" ]
  },
  {
    "bodyResponse": [ undefined, '' ]
  },
  {
    "method_token": [ true, 'possible', false ]
  }, 
  {
    "route_token":  [ true, 'possible', false ]
  }, 
  {
    "entry_token":  [ 'allowed', 'denied', 'not-found' ]
  }, 
]

module.exports = {
  defaultPossibilities
}