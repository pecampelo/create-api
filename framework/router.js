/* eslint-disable no-empty-function */
class Router {
	constructor() {
		this.routes = [];
		this.controllers = [];
	}

	use(features) {
		this.features = features;
	}

	async find(pathname, fullPath, method) {
		if (this.routes) {

			try {

				const items = await this.routes.find((route) => route.endpoint === pathname);
				const route =	await items.endpoints.find((endpoint) => endpoint.endpoint === fullPath &&	endpoint.method === method);
				return route;

			} catch (err) {

				if (err.message === 'Cannot read property \'endpoints\' of undefined') {
					return undefined;
				}
				console.log(err.message);

			}

		}	else {
			return this.routes;
		}
	}
}

module.exports = new Router();
