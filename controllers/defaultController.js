class DefaultController {
	constructor(label, methods) {
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
		}
		if (string === 'R') {
			string = 'read-only';
		}
		this.methods = string;
	}
}

module.exports = DefaultController;
