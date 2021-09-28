const http = require('http');
const config = require('./config');
const { bodyParser, queryParser, URLFormatter } = require('./helpers/parsers');
const headers = require('./helpers/headers');
const router = require('./router');
const logger = require('./helpers/logger');

const requestListener = async (req, res) => {


	headers.requestHeaderOptions(req);

	const requestURL = URLFormatter(config.options, req);

	req.pathname = requestURL.pathname.toString();
	if (req.pathname === '/favicon.ico') return res.end();
	req.address = `${req.socket.localAddress}:${req.socket.localPort}`;
	req.query = await queryParser(requestURL);

	headers.responseHeaderOptions('allowed', res);



	let { pathname } = requestURL;
	let extraPathname = '';
	let id = null;
	let username = null;



	const splitEndpoint = pathname.split('/').filter(Boolean); // WOW

	if (splitEndpoint.length > 1) {
		if (Number(splitEndpoint[1])) {
			pathname = `/${splitEndpoint[0]}`;
			extraPathname = '/:id';
			id = Number(splitEndpoint[1]);
		} else {
			pathname = `/${splitEndpoint[0]}`;
			extraPathname = '/:name';
			username = splitEndpoint[1].toLowerCase();
		}
	}

	const fullPath = `${pathname}${extraPathname}`;

	res.send = (statusCode, body) => {
		res.writeHead(statusCode, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(body));
	};

	const items = router.find((route) => route.mainEndpoint === fullPath);
	const route = items.endpoints.find((endpoint) => endpoint.endpoint === fullPath && endpoint.method === req.method);


	if (route) {

		req.params = { id, username };

		res.send = (statusCode, body) => {
			res.writeHead(statusCode, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(body));
		};

		if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
			bodyParser(req, () => route.endpoints.handler(req, res));
		} else {
			route.handler(req, res);
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		res.end(`Cannot ${req.method} ${req.url}`);
	}

	// const response = await router(req, userSocket, res);

	// TODO separate status code from response
	// TODO: Connect use to database

	// res.write(response);
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
