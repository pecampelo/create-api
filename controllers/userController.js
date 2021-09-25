let { users } = require('../mocks/data.json');

module.exports = {

	// const defaultKeys = [], defaultValues = [];

	// defaultPossibilities.forEach((property) => {
	//   let valueArrays = Object.values(property)[1];
	//   let key = Object.keys(property);
	//   defaultKeys.push(key);
	//   defaultValues.push(valueArrays);
	// })

	listUsers(req, res) {
		const { order } = req.query;

		// const file = fs.readFileSync('../create-api/mocks/data.json', 'utf-8');
		// const parsedFile = JSON.parse(file);
		// let users = parsedFile.users;

		const sortedData = users.sort((a, b) => {
			if (order === 'desc') return a.id < b.id ? 1 : -1;
			else return a.id > b.id ? 1 : -1;
		});

		res.send(200, sortedData);
	},
	getUserById(req, res) {
		const { id } = req.params;
		const gottenUser = users.find((user) => user.id === Number(id));

		if (!gottenUser) {
			return res.send(400, { error: 'User not found!' });
		}

		return res.send(200, gottenUser);
	},
	getUserByName(req, res) {
		const { username } = req.params;

		const gottenUser = users.find((user) => {
			const names = user.name.toLowerCase().split(' ');
			const result = names.find((anyName) => anyName === username);
			return result;
		});

		if (!gottenUser) {
			return res.send(400, { error: 'User not found!' });
		}

		return res.send(200, gottenUser);
	},
	createUser(req, res) {
		const { body } = req;
		const lastUserId = users[users.length - 1].id;
		const newUser = {
			id: Number(lastUserId) + 1,
			name: body.name,
			age: body.age,
		};
		users.push(newUser);

		return res.send(200, newUser);
	},
	updateUser(req, res) {
		const { id } = req.params;
		const { name, age } = req.body;

		const updatedUser = users.find((user) => user.id === Number(id));

		updatedUser.name = name;
		updatedUser.age = age;

		res.send(200, updatedUser);
	},
	deleteUser(req, res) {
		let { id } = req.params;
		id = Number(id);

		users = users.filter((user) => user.id !== id);

		return res.send(200, { deleted: true });
	},
};
