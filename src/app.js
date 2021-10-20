const server = require('./server');
const config = require('./config');

server.listen(config.options, () => {
	if (server.listening === true) {
		console.log(`\nServer is running on ${config.options.host}:${config.options.port}\n`);
	} else {
		console.log('Something wrong happened!');
	}
});
