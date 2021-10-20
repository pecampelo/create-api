/* eslint-disable quotes */
const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	port: 5432,
	user: 'root',
	password: 'root',
	database: 'myusers',
});

client.connect()
	.then(() => console.log(`Connected to database on port ${client.port}\n`))
	.catch((e) => console.log(`Couldn't ${e.message} to database!\n`));


exports.query = async (query, values) => {
	try {
		const { rows } = await client.query(query, values);
		return rows;

	} catch (err) {
		return { 'error': 'Query had an error' };
	}

};




