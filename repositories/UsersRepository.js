const { v4: uuidv4 } = require('uuid');

let users = require('../mocks/users');

class UsersRepository {

	findAll() {
		return new Promise((resolve) => resolve(users));
	}




	findById(id) {
		return new Promise((resolve) => resolve(users.find((user) => user.id === id)));
	}

	findByName(username) {
		return new Promise((resolve) => resolve(
			users.find((user) => user.name === username),
		));
	}

	findByEmail(userEmail) {
		return new Promise((resolve) => resolve(
			users.find((user) => user.email === userEmail),
		));
	}

	findByCPF(userCPF) {
		return new Promise((resolve) => resolve(
			users.find((user) => user.CPF == userCPF && user.CPF !== undefined),
		));
	}




	store(body) {
		return new Promise((resolve) => {

			const {
				name,	email, CPF, CNPJ,
			} = body;

			const newUser = {
				'id': uuidv4(),
				'name': name,
				'email': email,
				'CPF': CPF,
				'CNPJ': CNPJ,
			};

			users.push(newUser);

			resolve(newUser);
		});
	}

	update(id, body) {

		return new Promise((resolve) => {

			const user = users.find((user) => user.id === id);

			const newUser = {
				...user,
				'name': user.name,
				'email': user.email,
				...body,
			};

			// splicing because i need to change the original file
			users.splice(users.indexOf(user), 1, newUser);

			resolve(newUser);
		});
	}

	delete(id) {
		return new Promise((resolve) => {

			users = users.filter((user) => user.id !== id);
			// needs to be resignified because filter creates a new array
			// unequal because it should get all the results that are not that id.

			resolve();
		});
	}
}

module.exports = new UsersRepository();
