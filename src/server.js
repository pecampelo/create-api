const http = require('http');
const config = require('./config');
const { bodyParser, queryParser, URLFormatter } = require('./helpers/parsers');
const logger = require('./helpers/logger');
const router = require('../framework/router');
const { instances: routes } = require('./routes');


const requestListener = async (req, res) => {


	config.requestHeaderOptions(req, res);


	const requestURL = URLFormatter(config.options, req);

	req.pathname = requestURL.pathname.toString();
	if (req.pathname === '/favicon.ico') return res.end();


	req.address = `${req.socket.localAddress}:${req.socket.localPort}`;
	req.query = await queryParser(requestURL);


	config.responseHeaderOptions('allowed', res);



	let { pathname } = requestURL;
	let extraPathname = '';
	let id = null;

	const splitEndpoint = pathname.split('/').filter(Boolean); // WOW
	if (splitEndpoint.length > 1) {
		pathname = `/${splitEndpoint[0]}`;
		extraPathname = '/:id';
		// eslint-disable-next-line prefer-destructuring
		id = splitEndpoint[1].toString();
	}

	const fullPath = `${pathname}${extraPathname}`;


	res.send = (statusCode, body) => {
		res.writeHead(statusCode, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(body));
	};

	router.use(routes);

	const route = await router.find(pathname, fullPath, req.method);


	if (route) {

		req.params = { id };
		req.body = {};

		if (['POST', 'PUT', 'PATCH'].includes(req.method)) {

			try {	bodyParser(req, () =>	route.handler(req, res));	}
			catch (err) {	console.log('Error!');	}

		} else {

			try {		route.handler(req, res); 	}
			catch (err) {	 console.log('Error'); }

		}
	} else {

		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);

	}

	// TODO separate status code from response





	// TODO: Connect use to database





	// TODO : Fs. writeFile to logs.json

	logger.saveLog();
	return undefined;
};

const server = http.createServer(requestListener);

module.exports = server;

// const queryController = (requestInfo, userSocket) => {

// TODO: Check database for file,
// if there is none,
// return denied
// If there is,
// check for private or public.
// If public,
// return allowed;
// If private and there is an API key,
// return allowed
// If private and no API Key or incorrect API Key,
// return denied;
// If else
// return ?
// }

// const bodyController = (requestInfo, userSocket) => {

// TODO: Check database for file,
// if there is none,
// return denied
// If there is,
// check for private or public.
// If public,
// return allowed;
// If private and there is an API key,
// return allowed
// If private and no API Key or incorrect API Key,
// return denied;
// If else
// return ?
// }
