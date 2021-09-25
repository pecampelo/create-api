module.exports = {
	'options': {
		'host': process.env.HOST || '127.0.0.1',
		'port': process.env.PORT || 8001,
		'exclusive': true,
		'backlog': process.env.BACKLOG || 2,
	},
	requestHeaderOptions(req, res) {
		if (req.url === 'favicon.ico') {
			return res.end();
		}
		return undefined;
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
