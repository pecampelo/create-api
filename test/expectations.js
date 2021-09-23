const correctEndpoint = '127.0.0.1:8001/api'
const wrongEndpoint = '127.0.0.1:8001/'

const options = {
    hostname: '127.0.0.1',
    port: 8001,
    path: '/users',
    method: 'GET'
}

const mainEndpoint = [
  "/",
  "/users",
  "/locations"
]

const usersEndpoint = [
  {
  "id": 1,
  "name": "Pedro Henrique Campelo Matheus",
  "age": 25
  },
  {
  "id": 2, 
  "name": "Kimberly Borges Valério",
  "age": 28 
  },
  {
  "id": 3,
  "name": "Ana Cláudia Barreiros Campelo Matheus",
  "age": 49
  } 
]

module.exports = {
  mainEndpoint,
  usersEndpoint,
  options
}