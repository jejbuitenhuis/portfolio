export default {
	server: {
		host: "0.0.0.0",
		port: 8080,
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Joram Buitenhuis",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com" },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bungee&family=Poppins&display=swap" },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		"~/assets/scss/variables.scss",
	],

	styleResources: {
		scss: [
			"./assets/scss/**/*.scss",
		],
		hoistUseStatements: true,
	},

	fontawesome: {
		component: "fa",
		suffix: true,
		addCss: true,
		icons: {
			solid: [
				"faEnvelope",
				"faTriangleExclamation",
				"faExternalLinkAlt",
			],
			brands: [
				"faGithub",
				"faLinkedin",
			],
		},
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
		"@nuxtjs/style-resources",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		"@nuxtjs/fontawesome",
		"@nuxt/content",
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
};
