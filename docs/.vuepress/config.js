const { description } = require('../../package');

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'Title',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: 'Description',
	base: '/docs/',

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		[
			'link',
			{
				rel: 'icon',
				href: 'https://ahmadawais.com/wp-content/uploads/2019/12/cropped-Ahmad-Awais-Transparent-32x32.png'
			}
		]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		// repo: 'ahmadawais/vuepress-base',
		// repoLabel: 'Contribute!',
		// docsDir: 'docs',
		lastUpdated: 'Last Updated',
		editLinks: false,
		editLinkText: 'Edit this page',
		// default value is true. Set it to false to hide next page links on all pages
		nextLinks: false,
		// default value is true. Set it to false to hide prev page links on all pages
		prevLinks: false,
		smoothScroll: true,
		navbar: false,
		nav: [
			{
				text: '@MrAhmadAwais',
				link: 'https://twitter.com/MrAhmadAwais/'
			}
		],
		sidebarDepth: 3,
		sidebar: {
			'/guide/': [
				['', '👐 Get Started'],
				['tldr', '⚡ TLDR']
			]
		}
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
		'@vuepress/active-header-links',
		'vuepress-plugin-export'
	]
};
