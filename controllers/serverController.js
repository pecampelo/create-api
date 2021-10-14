const endpoints = require('../mocks/endpoints');

class ServerController {
	index(req, res) {
		let { order } = req.query;
		if (!order) {
			order = 'asc';
		}
		const sortedEndpoints = endpoints.sort((a, b) => {
			const itemA = a.toLowerCase();
			const itemB = b.toLowerCase();
			if (order === 'desc') {
				return itemA > itemB ? 1 : -1;
			} else {
				return itemA < itemB ? 1 : 1;
			}
		});
		return res.send(200, sortedEndpoints);
	}
}

module.exports = ServerController;
