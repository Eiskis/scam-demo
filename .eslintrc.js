module.exports = {

	// http://eslint.org/docs/user-guide/configuring
	root: true,

	parser: 'babel-eslint',

	parserOptions: {
		sourceType: 'module'
	},

	env: {
		browser: false,
	},

	plugins: [],

	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',

	// http://eslint.org/docs/user-guide/rules
	rules: {

		// allow debugger during development
		'no-debugger': (process.env.NODE_ENV === 'production' ? 2 : 0),

		// Stylistic issues

		// Indent with tabs, because spaces are not user-adjustable in IDEs, are harder to target with mouse cursors and will always have indentation errors
		'no-tabs': ['off'],
		'indent': ['warn', 'tab'],

		// Semi colons required to avoid any gotchas
		'semi': [
			'warn',
			'never'
		],

		// Single quotes should be used
		// NOTE: template literals not allowed currently, but can be enabled if we have legitimate use cases for them
		'quotes': [
			'warn',
			'single',
			{
				'avoidEscape': false,
				'allowTemplateLiterals': false
			}
		],

		// FIXME: we want to use this, but it's causing issues in tests
		'no-unused-expressions': 'off',

		// Number of consecutive blank lines allowed
		// FIXME: there might be a bug with maxBOF, turning this off for now
		// 'no-multiple-empty-lines': 'off',
		'no-multiple-empty-lines': [
			'warn',
			{
				'max': 3,
				'maxBOF': 2,
				'maxEOF': 1
			}
		],



		// Language features

		// Misc.
		'padded-blocks': 'off',        // Weird rule, we need whitespace sometimes
		'no-empty': 'warn',            // Empty blocks should be cleaned up
		'no-unreachable': 'warn',      // Unreachable code should be cleaned up
		'no-else-return': 'error',     // Smelly, code will break when refactoring
		'no-useless-escape': 'off',    // Sometimes escaping certain characters is not useless

		// Variables should be declared when they are used for the first time
		// This makes it easier to move them from one scope to another when refactoring
		'one-var': [
			'error',
			'never'
		],

		// Allow balancing object notation key-value pairs
		// 'key-spacing': ['off'],

		// config.someItems['foo'] is sometimes useful
		// It can highlight that we're referring to an item with a very specific, hardcoded name (that probably should be a variable)
		'dot-notation': ['off'],

		// Make arrow functions slightly less dangerous and confusing
		'no-confusing-arrow': ['error'],
		'arrow-parens': ['error', 'always'],
		'arrow-body-style': ['error', 'always'],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],

		// Would normally prefer the same traditional object syntax everywhere, because shorthand cannot always be used.
		// It's better to have only one format in the codebase. However imports and exports have similar shorthand syntax anyway.
		'object-shorthand': [
			'warn',
			'consistent'
		],

		// No destructuring assignments like
		// 		var { bar: foo } = object;
		// This should be written as
		// 		var foo = object.bar;
		// ... So it's consistent with the 99 % of other assignments
		// Whoever thought this is a good idea in JS didn't think about the usability
		// http://teeohhem.com/why-destructuring-is-a-terrible-idea-in-es6/
		// 'no-useless-rename': 'warn',
		'prefer-destructuring': [
			'error',
			{
				'array': false,
				'object': false
			}
		],

		// Allow long ternary (not always 'unneeded')
		// See http://stackoverflow.com/questions/2100758/javascript-or-variable-assignment-explanation
		'no-unneeded-ternary': ['off'],

		// New is fine
		'no-new': ['off'],



		// Rules for imports plugin
		// https://github.com/benmosher/eslint-plugin-import

		// FIXME: we should enable these once this issue with aliases is resolved:
		// https://github.com/benmosher/eslint-plugin-import/issues/779
		// 'import/named': ['error'],
		// 'import/default': ['error'],
		// 'import/no-extraneous-dependencies': ['error'],

		'import/no-absolute-path': ['error'],
		'import/no-webpack-loader-syntax': ['error'],
		'import/export': ['warn'],
		'import/no-named-as-default': ['warn'],
		'import/first': ['warn'],
		'import/no-duplicates': ['warn'],
		'import/extensions': [
			'warn',
			'never',
			{
				'svg': 'always'
			}
		],

		// We turn this off, as sometimes we want default to be an object containing all the named exports
		'import/no-named-as-default-member': ['off'],

	}
};
