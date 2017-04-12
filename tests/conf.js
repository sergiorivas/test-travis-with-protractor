exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
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
