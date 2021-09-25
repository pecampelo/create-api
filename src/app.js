const server = require('./server');
const config = require('./config');

server.listen(config.options, () => {
	if (server.listening === true) {
		console.log('...');
		console.log(`Server is running on ${config.options.host}:${config.options.port}`);
		console.log('...');
	} else {
		console.log('Something wrong happened!');
	}
});
