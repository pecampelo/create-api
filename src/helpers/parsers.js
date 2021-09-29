const URLFormatter = (config, req) => {
	const requestURL = new URL(`http://${config.host}:${config.port}${req.url}`);
	return requestURL;
};

const queryParser = async (URL) => {
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
		if (body) {
			try {
				body = JSON.parse(body);
				request.body = body;
			} catch (err) {
				console.log(err);
			}
		}
		// eslint-disable-next-line no-empty
		else {}
		callback();
	});
};

module.exports = {
	URLFormatter,
	queryParser,
	bodyParser,
};
