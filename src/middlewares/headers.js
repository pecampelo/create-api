function requestHeaderOptions(req, res) {
	if (req.url === 'favicon.ico') {
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

	return undefined;

	// const headers = req.headers;
	// let { api_token = '' } = req.headers;

	// function checkAPIAccessToken() {
	//   return permission === false;
	// }

	// TODO - add if statement that extracts req.headers[authToken]
}

function responseHeaderOptions(entry, res) {
	let statusCode;
	if (entry === 'allowed') statusCode = 200;
	if (entry === 'denied') statusCode = 403;
	if (entry === 'not-found') statusCode = 404;
	res.writeHead(statusCode, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '',
		'Connection': 'keep-alive',
		'X-Content-Type-Options': 'nosniff',
	});
}
// `res` is an http.ServerResponse, which is a writable stream.

module.exports = {
	requestHeaderOptions,
	responseHeaderOptions,
};
