module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'airbnb-base',
	],
	'parserOptions': {
		'parser': 'babel-eslint',
		'ecmaVersion': 12,
	},
	'rules': {
		'eqeqeq': 'off',
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'semi': 'error',
		'quotes': ['error', 'single'],
		'quote-props': 'off',
		'rest-spread-spacing': 'error',
		'prefer-template': 'error',
		'no-useless-concat': 'error',
		'no-console': 'off',
		'no-else-return': 'off',
		'class-methods-use-this': 'off',
		'brace-style': 'off',
		'no-multiple-empty-lines': 'off',
		'padded-blocks': 'off',
		'no-unused-expressions': 'off',
		'array-callback-return': 'off',
		'max-len': 'off',
		'no-unused-vars': 'off',
		'consistent-return': 'off',
		'no-empty': 'off',
		'no-shadow': 'off',
	},

};
