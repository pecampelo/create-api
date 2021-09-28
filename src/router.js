/* eslint-disable no-unused-vars */
const MainController = require('../controllers/mainController');
const UserController = require('../controllers/userController');
const LocationController = require('../controllers/locationController');
const endpoints = require('../mocks/endpoints');

class Route {
	constructor(endpoint, Controller, main = false) {
		this.mainEndpoint = endpoint;
		this.controller = new Controller();
		this.id = '/:id';
		if (main) {
			this.id = '';
		}
		this.endpoints = [
			{
				'endpoint': `${this.mainEndpoint}`,
				'method': 'GET',
				'handler': this.controller.index,
			},
			{
				'endpoint': `${this.mainEndpoint}${this.id}`,
				'method': 'GET',
				'handler': this.controller.show,
			},
			{
				'endpoint': `${this.mainEndpoint}`,
				'method': 'POST',
				'handler': this.controller.create,
			},
			{
				'endpoint': `${this.mainEndpoint}${this.id}`,
				'method': 'PUT',
				'handler': this.controller.update,
			},
			{
				'endpoint': `${this.mainEndpoint}${this.id}`,
				'method': 'DELETE',
				'handler': this.controller.delete,
			},
		];
		delete this.id;
		Route.instances.push(this);
	}
}

Route.instances = [];

const main 	= new Route('/', 			MainController, true);
const users = new Route('/users', UserController);

module.exports = Route.instances;
