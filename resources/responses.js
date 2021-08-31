
const response1 = {
  "apiMessage": "Welcome to my API! 🎈",
  "request": {
    "href": "http://127.0.0.1:8001/api",
    "address": "127.0.0.1:8001",
    "pathname": "/api",
    "method": "GET",
    "query": {
      
    }
  },
  "method_token": true,
  "route_token": true,
  "entry": "allowed",
  "bodyResponse": "Response! 🎈"
}

const response2 = {
  "apiMessage": "Not Found! 😔",
  "request": {
    "href": "http://127.0.0.1:8001/",
    "address": "127.0.0.1:8001",
    "pathname": "/",
    "method": "GET",
    "query": {}
  },
  "method_token": true,
  "route_token": false,
  "entry": "not-found",
  "bodyResponse": [
    "Please only use GET method",
    "You can try these endpoints:",
    [
      "/api",
      "/api/users",
      "/api/locations"
    ]
  ]
}

module.exports = {
  response1,
  response2
}