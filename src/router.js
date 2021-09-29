/* eslint-disable no-unused-vars */
const MainController = require('../controllers/mainController');
const UserController = require('../controllers/userController');
const LocationController = require('../controllers/locationController');
const endpoints = require('../mocks/endpoints');
const HeroController = require('../controllers/heroController');

class Route {
	constructor(endpoint, Controller, main = false) {
		this.mainEndpoint = endpoint;
		this.controller = new Controller();
		this.id = '/:id';
		this.name = '/:name';
		if (main) {
			this.id = '';
			this.name = '';
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
				'endpoint': `${this.mainEndpoint}${this.name}`,
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
		delete this.name;
		Route.instances.push(this);
	}
}

Route.instances = [];

const main 	= new Route('/', 			MainController, true);
const users = new Route('/users', UserController);
const heroes = new Route('/heroes', HeroController);

module.exports = Route.instances;
