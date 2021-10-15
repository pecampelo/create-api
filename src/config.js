module.exports = {
	'options': {
		'host': process.env.HOST || '127.0.0.1',
		'port': process.env.PORT || 8001,
		'exclusive': true,
		'backlog': process.env.BACKLOG || 2,
	},
	requestHeaderOptions(req, res) {

		if (req.url === '/favicon.ico') {
			return res.end();
		}

		const formatURL = (url) => {

			let newURL = '';
			let reqURL = url.split('');
			const split = reqURL.pop();

			if (split === '/' && url.length > 1) {
				newURL = reqURL.join('');
				reqURL = newURL.split('');
				const thereAreStillSlashes = reqURL[url.length - 2];


				if (thereAreStillSlashes === '/') {

					return formatURL(newURL);
				}

				return newURL;
			}

			else {
				return url;
			}

		};

		req.url = formatURL(req.url);
		return req.url;
		// const headers = req.headers;
		// let { api_token = '' } = req.headers;

		// function checkAPIAccessToken() {
		//   return permission === false;
		// }

		// TODO - add if statement that extracts req.headers[authToken]
	},

	responseHeaderOptions(entry, res) {
		let statusCode;
		if (entry === 'allowed') statusCode = 200;
		if (entry === 'denied') statusCode = 403;
		if (entry === 'not-found') statusCode = 404;
		res.writeHead(statusCode, {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '',
			'Connection': 'close',
			'X-Content-Type-Options': 'nosniff',
		});
	},
	// `res` is an http.ServerResponse, which is a writable stream.
};
