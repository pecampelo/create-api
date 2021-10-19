const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
	async index(request, response) {
		const categories = await CategoriesRepository.findAll();

		response.send(200, categories);
	}

	async create(request, response) {
		const { name } = request.body;

		if (!name) {
			return response.status(400, { 'error': 'Name is required' });
		}

		const category = await CategoriesRepository.create({ name });

		response.send(200, category);

	}
}

module.exports = CategoryController;
