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
		'ecmaVersion': 12,
	},
	'rules': {
		'eqeqeq': 'off',
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'semi': 'error',
		'quotes': ['error', 'single'],
		'quote-props': ['error', 'always'],
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
	},
};
