/* eslint-disable no-unused-vars */
const MainController = require('../controllers/mainController');
const UserController = require('../controllers/userController');
const endpoints = require('../mocks/endpoints');
const HeroController = require('../controllers/heroController');
const DefaultController = require('../controllers/defaultController');

class Route extends DefaultController {
	constructor(route, methods, endpoint, Controller, main = false) {
		super(route, methods);
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

const main 	= 	new Route('Main Route',	'R', 		'/',				MainController, 	true);
const users = 	new Route('Users', 			'CRUD', '/users', 	UserController);
const heroes = 	new Route('Heroes', 		'CRUD',	'/heroes', 	HeroController);

console.table(Route.instances);
module.exports = Route.instances;
