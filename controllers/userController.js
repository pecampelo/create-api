const UsersRepository = require('../repositories/UsersRepository');

class UserController {
	async index(req, res) {
		// const { order, age } = req.query;

		const usersData = await UsersRepository.findAll();
		// const sortedData = await sortData(usersData, order, age);

		return res.send(200, usersData);
	}

	async show(req, res) {
		const { id } = req.params;

		let gotUser;

		if (id) {
			gotUser = await UsersRepository.findById(id);
		}

		if (!gotUser) {
			return res.send(404, { 'error': 'User not found!' });
		}

		return res.send(200, gotUser);
	}

	async create(req, res) {
		const { body } = req;
		const {
			name, email, CPF, CNPJ,
		} = req.body;

		if (!body) return res.send(400, { 'error': 'Body invalid' });

		const userResults = [
			await UsersRepository.findByName(name),
			await UsersRepository.findByEmail(email),
			await UsersRepository.findByCPF(CPF),
		];

		const userExists = userResults.forEach((result) => result === true);

		console.log(userExists);

		if (userExists) { return res.send(400, { 'error': 'user is already taken' }); }

		else {
			const newUser = await UsersRepository.store(body);
			return res.send(200, newUser);
		}

	}

	async update(req, res) {
		const { id } = req.params;

		const newUser = await UsersRepository.update(id, req.body);

		res.send(200, newUser);
	}

	async delete(req, res) {

		const { id } = req.params;

		const userData = await UsersRepository.findById(id);

		if (!userData) {
			return res.send(404, {
				'deleted': false,
				'error': 'user not found',
			});
		}

		await UsersRepository.delete(id);

		return res.send(204, { });
	}
}

module.exports = UserController;
