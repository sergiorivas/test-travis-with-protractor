exports.config = {
	seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

	capabilities: {
		'browserstack.user': 'eriknestorovic',
		'browserstack.key': '98KhgREoSxC4TYnocsoP',
		'browserName': 'chrome'
	},
	suites: {
		example1: [
			'specs/angular_page.js',
		]
	},

	allScriptsTimeout: 180000,
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 180000,
		isVerbose: true
 	},
 	onPrepare: function() {
		browser.manage().window().setSize(1024, 720);
	}
};
