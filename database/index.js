/* eslint-disable quotes */
const { Client } = require('pg');

const client = new Client({
	host: '0.0.0.0',
	port: 5432,
	user: 'postgres',
	password: 'postgres',
	database: 'myusers',
});

client.connect()
	.then(() => console.log(`Connected to database on port ${client.port}\n`))
	.catch((e) => console.log(`Couldn't connect to database!\n${e.message}`));


exports.query = async (query, values) => {
	try {
		const { rows } = await client.query(query, values);
		return rows;

	} catch (err) {
		return { 'error': 'Query had an error' };
	}

};




