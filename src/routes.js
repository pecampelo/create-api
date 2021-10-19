const HeroController = require('../controllers/heroController');
const Controller = require('../controllers/defaultController');
const UserController = require('../controllers/userController');
const ServerController = require('../controllers/serverController');
const CategoryController = require('../controllers/categoryController');

Controller.instances = [];

const main 	= 	new Controller('Main',			'R', 		'/',				ServerController, 	true);
const users = 	new Controller('Users', 		'CRUD', '/users',		UserController);
const heroes = 	new Controller('Heroes', 		'CRUD',	'/heroes', 	HeroController);
const categories = new Controller('Categories', 'CRUD', '/categories', CategoryController);

module.exports = Controller.instances;
