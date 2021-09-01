const correctEndpoint = '127.0.0.1:8001/api'
const wrongEndpoint = '127.0.0.1:8001/'

const getEndpointAPI = {
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

const option1 = {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/api',
    method: 'GET'
}  

const getEndpoint = {
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
const option2 = {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/',
    method: 'GET'
  }

const postEndpointAPI = {
    "apiMessage": "Access denied! 😡",
    "request": {
        "href": "http://127.0.0.1:8001/api",
        "address": "127.0.0.1:8001",
        "pathname": "/api",
        "method": "POST",
        "query": {}
    },
    "method_token": "possible",
    "route_token": true,
    "entry": "denied",
    "bodyResponse": [
        "Please only use GET method"
    ]
  }
const option3 = {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/api',
    method: 'POST'
}

const postEndpoint = {
    "apiMessage": "Not Found! 😔",
    "request": {
        "href": "http://127.0.0.1:8001/",
        "address": "127.0.0.1:8001",
        "pathname": "/",
        "method": "POST",
        "query": {}
    },
    "method_token": "possible",
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
const option4 = {
  hostname: '127.0.0.1',
  port: 8001,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}


module.exports = {
  getEndpoint,
  getEndpointAPI,
  postEndpoint,
  postEndpointAPI,
  correctEndpoint,
  option1,
  option2,
  option3,
  option4,
  wrongEndpoint
}