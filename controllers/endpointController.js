const endpoints = require('../mocks/endpoints');

module.exports = {
	listEndpoints(req, res) {
		const { order } = req.query;

		const sortedEndpoints = endpoints.sort((a, b) => {
			const itemA = a.toLowerCase();
			const itemB = b.toLowerCase();
			if (order === 'desc') {
				return itemA > itemB ? 1 : -1;
			} else {
				return itemA < itemB ? 1 : 1;
			}
		});

		res.send(200, sortedEndpoints);
	},
	// addEndpoint(req, res) {
	// 	// TODO
	// },
};
