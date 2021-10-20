const UsersRepository = require('../repositories/UsersRepository');

class UserController {


	async index(req, res) {
		const { orderBy } = req.query;

		const usersData = await UsersRepository.findAll(orderBy);
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

		if (!req.body) return res.send(400, { 'error': 'Body invalid' });

		const {
			name, email, CPF,
		} = req.body;

		const userResults = [
			await UsersRepository.findByName(name),
			await UsersRepository.findByEmail(email),
			await UsersRepository.findByCPF(CPF),
		];

		const userExists = userResults.map(Boolean).filter((result) => result === true);

		if (userExists.includes(true)) { return res.send(400, { 'error': 'user is already taken' }); }

		else {

			try {
				const newUser = await UsersRepository.create(req.body);
				return res.send(200, newUser);

			}	catch (err) {

				return res.send(400, { 'error': 'check body' });

			}
		}
	}


	async update(req, res) {
		const { id } = req.params;

		const { name, email } = req.body;

		const userExists = await UsersRepository.findById(id);

		if (!userExists) {
			return res.send(404, { 'error': 'User not found!' });
		}

		if (!name) {
			return res.send(400, { 'error': 'Name is required' });
		}

		const contactByEmail = await UsersRepository.findByEmail(email);

		if (contactByEmail && contactByEmail.id !== id) {
			return res.send(400, { 'error': 'Email has already been taken!' });
		}

		const contactById = await UsersRepository.findById(id);

		if (contactById.name !== name) {
			return res.send(400, { 'error': 'id is invalid' });
		}


		try {
			const updatedUser = await UsersRepository.update(id, req.body);

			return res.send(200, updatedUser);

		} catch (err) {
			return res.send(400, { 'error': 'Name is incorrect!' });
		}
	}


	async delete(req, res) {

		const { id } = req.params;

		await UsersRepository.delete(id);

		return res.send(204, { });
	}

}

module.exports = UserController;
