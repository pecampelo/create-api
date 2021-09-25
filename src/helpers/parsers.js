const URLFormatter = (config, req) => {
	const requestURL = new URL(`http://${config.host}:${config.port}${req.url}`);
	return requestURL;
};

const queryParser = (URL) => {
	const params = new URLSearchParams(URL.search.slice(1));
	const query = {};
	params.forEach((value, key) => {
		query[key] = value.toLowerCase();
	});
	return query;
};

const bodyParser = (request, callback) => {
	let body = '';

	request.on('data', (chunk) => {
		body += chunk;
	});

	request.on('end', () => {
		body = JSON.parse(body);
		request.body = body;
		callback();
	});
};

module.exports = {
	URLFormatter,
	queryParser,
	bodyParser,
};
