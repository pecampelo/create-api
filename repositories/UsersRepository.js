const db = require('../database');

class UsersRepository {

	async findAll(orderBy = 'ASC') {
		const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
		const rows = await db.query(`SELECT * FROM users ORDER BY name ${direction}`);

		return rows;
	}

	async findById(id) {
		const [row] = await db.query('SELECT * FROM users WHERE id = $1 ORDER BY name ASC ', [id]);

		return row;
	}

	async findByName(username) {
		const [row] = await db.query('SELECT * FROM users WHERE name = $1', [username]);

		return row;
	}

	async findByEmail(userEmail) {
		const [row] = await db.query('SELECT * FROM users WHERE name = $1', [userEmail]);

		return row;
	}

	async	findByCPF(userCPF) {
		const [row] = await db.query('SELECT * FROM users WHERE name = $1', [userCPF]);

		return row;
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

	async update(id, body) {
		const {
			name,	email, phone, address, addressNumber, city,	state,
			country, CEP, CPF,	age, jobPosition, company, categoryId,
		} = body;

		const [row] = await db.query(
			`UPDATE users
			SET name  = $1,
				email   = $2,
				phone   = $3,
				address = $4,
				addressnumber = $5,
				city = $6,
				state = $7,
				country = $8,
				CEP = $9,
				CPF = $10,
				age = $11,
				jobposition = $12,
				company = $13,
				category_id = $14
			WHERE id = $15
			RETURNING *
		)`, [name,
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
				id,
			],
		);

		return row;
	}

	async delete(id) {
		const deleteOp = await db.query('DELETE FROM users WHERE id = $1', [id]);
		return deleteOp;
	}
}

module.exports = new UsersRepository();
