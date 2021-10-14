const HeroController = require('../controllers/heroController');
const Controller = require('../controllers/mainController');
const ServerController = require('../controllers/serverController');
const UserController = require('../controllers/userController');

Controller.instances = [];

const main 	= 	new Controller('Main',			'R', 		'/',				ServerController, 	true);
const users = 	new Controller('Users', 		'CRUD', '/users',		UserController);
const heroes = 	new Controller('Heroes', 		'CRUD',	'/heroes', 	HeroController);

module.exports = Controller.instances;
