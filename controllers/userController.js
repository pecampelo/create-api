let { users } = require('../mocks/data.json');

class UserController {
	index(req, res) {
		const { order, age } = req.query;

		// function sortDataByOtherRules(data, ...rules) {
		// 	let value = rules[0].name;
		// 	const sortedData = data.sort((a, b) => {
		// 		if (rules[0] === 'desc') {
		// 			return a.id < b.id ? 1 : -1;
		// 		}

		// 		else {
		// 			return a.id > b.id ? 1 : -1;
		// 		}
		// 	});
		// }

		function sortData(file, rule1) {
			const sortedData = file.sort((a, b) => {
				if (rule1 === 'desc') {
					// if (rules) {
					// 	return sortDataByOtherRules([rules]);
					// }
					// else {
					return a.id < b.id ? 1 : -1;
					// }
				}

				else {
					return a.id > b.id ? 1 : -1;
				}
			});
			return sortedData;
		}

		const sortedData = sortData(users, order, age);

		return res.send(200, sortedData);
	}

	show(req, res) {
		const { id, username } = req.params;

		let gotUser;

		if (id) {
			gotUser = users.find((user) => user.id === Number(id));

			if (!gotUser) {
				return res.send(400, { 'error': 'User not found!' });
			}
			return res.send(200, gotUser);
		}

		if (username) {
			gotUser = users.find((user) => {
				const names = user.name.toLowerCase().split(' ');
				const result = names.find((anyName) => anyName === username);
				return result;
			});

			if (!gotUser) {
				return res.send(400, { 'error': 'User not found!' });
			}
			return gotUser;
		}
		return res.send(200, gotUser);
	}

	create(req, res) {
		const { body } = req;
		const lastUserId = users[users.length - 1].id;

		if (!body) return res.send(400, { 'error': 'Body invalid' });
		if (typeof body.name !== 'string' || typeof body.age !== 'number') {
			return res.send(400, { 'error': 'Body invalid' });
		}

		const newUser = {
			'id': Number(lastUserId) + 1,
			'name': String(body.name),
			'age': Number(body.age),
		};
		users.push(newUser);

		return res.send(200, newUser);
	}

	update(req, res) {
		const { id } = req.params;
		const { name, age } = req.body;

		const updatedUser = users.find((user) => user.id === Number(id));

		updatedUser.name = name;
		updatedUser.age = age;

		res.send(200, updatedUser);
	}

	delete(req, res) {
		let { id } = req.params;
		id = Number(id);

		users = users.filter((user) => user.id !== id);

		return res.send(200, { 'deleted': true });
	}
}

module.exports = UserController;
