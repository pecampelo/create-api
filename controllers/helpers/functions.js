// function sortDataByOtherRules(data, ...rules) {
// 	let value = rules[0].name;
// 	const sortedData = data.sort((a, b) => {
// 		if (rules[0] === 'desc') {
// 			return a.id < b.id ? 1 : -1;
// 		}

// 		else {
// 			return a.id > b.id ? 1 : -1;
// 		}
// 	});
// }

module.exports = {
	sortData(file, rule1) {
		const sortedData = file.sort((a, b) => {
			if (rule1 === 'desc') {
				// if (rules) {
				// 	return sortDataByOtherRules([rules]);
				// }
				// else {
				return a.id < b.id ? 1 : -1;
				// }
			}

			else {
				return a.id > b.id ? 1 : -1;
			}
		});
		return sortedData;
	},
};
