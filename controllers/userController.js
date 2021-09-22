const fs = require('fs');
const { users } = require('../mocks/data.json')

module.exports = { 

  // const defaultKeys = [], defaultValues = [];
  
  // defaultPossibilities.forEach((property) => {
    //   let valueArrays = Object.values(property)[1];
    //   let key = Object.keys(property);
    //   defaultKeys.push(key);
    //   defaultValues.push(valueArrays);
    // })
    
  listUsers(req, res) {
    const data = fs.readFileSync('../create-api/mocks/data.json', 'utf-8')
    return res.send(200, JSON.parse(data));
  
  
  
    
    // createUser(req, res) {
      
      // }           
      
  
  },
  getUserById(req, res) {
    
    
    
    const { id } = req.params;
    
    const user = users.find((user) => user.id == Number(id));
    
    
    
    if (!user) {
      return res.send(400, { error: 'User not found!' });    
    }
    
    res.send(200, user);
    
  },
  getUserByName(req, res) {
    
    
    
    const { name } = req.params;
    
    
    const user = users.find((user) => user.name.toLowerCase() === name)
    
    
    
    if (!user) {
      return res.end(400, { error: 'User not found!' });    
    }
    
    res.send(200, user);
    
  },
  createUser(req, res) {
    const { body } = req;
    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: Number(lastUserId) + 1,
      name: body.name,
      age: body.age
    }
    users.push(newUser)

    response.send(200, newUser)
  }
}