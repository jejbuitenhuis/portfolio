module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
	},
	extends: [
		"@nuxtjs",
		"plugin:nuxt/recommended",
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		"no-tabs": [ "error", { allowIndentationTabs: true }],
		indent: [ "error", "tab" ],
		"vue/html-indent": [ "error", "tab" ],
		quotes: [ "error", "double", { allowTemplateLiterals: true }],
		semi: [ "error", "always" ],
		"comma-dangle": [ "error", "only-multiline" ],
		"array-bracket-spacing": [ "error", "always", {
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false,
		}],
		"object-curly-spacing": [ "error", "always", {
			arraysInObjects: false,
		}],
		"space-before-function-paren": [ "error", "never" ],
	},
};
