/* eslint-disable no-unused-vars */
let heroes = require('../database/heroes.json');

class HeroController {

	index(req, res) {
		const { order, legs } = req.query;

		return res.send(200, heroes);
	}

	show(req, res) {
		const { id, username } = req.params;

		let gotUser;

		if (id) {
			gotUser = heroes.find((user) => user.id === Number(id));

			if (!gotUser) {
				return res.send(400, { 'error': 'User not found!' });
			}
			return res.send(200, gotUser);
		}

		if (username) {
			gotUser = heroes.find((user) => {
				const names = user.name.toLowerCase().split(' ');
				const result = names.find((anyName) => anyName === username);
				return result;
			});

			if (!gotUser) {
				return res.send(400, { 'error': 'User not found!' });
			}
			return res.send(200, gotUser);
		}

		else {
			return res.send(400, { 'error': 'User not found!' });
		}
	}

	create(req, res) {
		const { body } = req;
		const lastUserId = heroes[heroes.length - 1].id;


		if (!body) return res.send(400, { 'error': 'Body invalid' });
		if (typeof body.name !== 'string') {
			return res.send(400, { 'error': 'Body invalid' });
		}

		const newUser = {
			'id': Number(lastUserId) + 1,
			'name': String(body.name),
		};
		heroes.push(newUser);

		return res.send(200, newUser);
	}

	update(req, res) {
		const { id } = req.params;
		const { name, age } = req.body;

		const updatedUser = heroes.find((user) => user.id === Number(id));

		updatedUser.name = name;
		updatedUser.age = age;

		res.send(200, updatedUser);
	}

	delete(req, res) {
		let { id } = req.params;
		id = Number(id);

		heroes = heroes.filter((user) => user.id !== id);

		return res.send(200, { 'deleted': true });
	}
}

module.exports = HeroController;
