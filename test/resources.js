const correctEndpoint = '127.0.0.1:8001/api'
const wrongEndpoint = '127.0.0.1:8001/'

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy the milk 🍼'
  })
)
const getEndpointAPI = [ 
  {
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
  },
  {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/api',
    method: 'GET'
  }  
]

const getEndpoint = [
  {
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
  },
  {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/',
    method: 'GET'
  }
]

const postEndpointAPI = [
  {
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
  },
  {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/api',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
]

const postEndpoint = [
  {
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
  },
  {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
]


module.exports = {
  getEndpoint,
  getEndpointAPI,
  postEndpoint,
  postEndpointAPI,
  correctEndpoint,
  wrongEndpoint
}