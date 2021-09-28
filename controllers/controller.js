class Controller {
	constructor(label, endpoint) {
		this.label = label;
		this.methods = () => {
			let string;
			if (typeof endpoint === 'string' && endpoint.length < 5 && endpoint.length > 0) {
				const methods = endpoint.split('');
				methods.forEach((letter) => {
					if (['C', 'R', 'U', 'D'].includes(letter)) {
						string += letter;
					}
					return letter;
				});
			}
			console.log(string);
			return string;
		};
	}
}

module.exports = Controller;
