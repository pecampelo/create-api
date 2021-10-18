const { v4: uuidv4 } = require('uuid');
const db = require('../database');

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

	async create(body) {
		const {
			name,
			email,
			phone,
			address,
			addressNumber,
			city,
			state,
			country,
			CEP,
			CPF,
			age,
			jobPosition,
			company,
			categoryId,
		} = body;

		const [row] = await db.query(
			`INSERT INTO users(
				name,
				email,
				phone,
				address,
				addressnumber,
				city,
				state,
				country,
				CEP,
				CPF,
				age,
				jobposition,
				company,
				category_id
		) VALUES(
			$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
			RETURNING *
		`, [name,
				email,
				phone,
				address,
				addressNumber,
				city,
				state,
				country,
				CEP,
				CPF,
				age,
				jobPosition,
				company,
				categoryId,
			],
		);

		return row;
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
