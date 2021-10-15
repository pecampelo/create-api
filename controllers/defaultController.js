class Controller {
	constructor(label, methods, endpoint, ChildController, main = false) {
		this.label = label;


		let string = '';
		if (typeof methods === 'string' && methods.length < 5 && methods.length > 0) {
			const methodArray = methods.split('');
			methodArray.forEach((letter) => {
				if (['c', 'r', 'u', 'd'].includes(letter.toLowerCase())) {
					string += letter.toUpperCase();
				}
				return letter;
			});
		} else {
			methods === undefined;
		}
		this.methods = string;


		this.endpoint = endpoint;

		this.childController = new ChildController();

		this.id = '/:id';

		this.name = '/:name';

		if (main) {
			this.id = '';
			this.name = '';
		}

		this.endpoints = [
			{
				'endpoint': `${this.endpoint}`,
				'method': 'GET',
				'handler': this.childController.index,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'GET',
				'handler': this.childController.show,
			},
			{
				'endpoint': `${this.endpoint}${this.name}`,
				'method': 'GET',
				'handler': this.childController.show,
			},
			{
				'endpoint': `${this.endpoint}`,
				'method': 'POST',
				'handler': this.childController.create,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'PUT',
				'handler': this.childController.update,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'DELETE',
				'handler': this.childController.delete,
			},
		];

		delete this.id;
		delete this.name;

		Controller.instances.push(this);
	}
}

module.exports = Controller;
