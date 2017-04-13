exports.config = {
	sauceUser: "sergiorivas",
 	sauceKey: "a5bd0a26-0019-4215-bb1b-e885cf9fb6d2",
	// seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
	multiCapabilities: [{
	  'browserName': 'chrome'
	}, {
	  'browserName': 'firefox'
	}, {
	  'browserName': 'safari'
	}, {
	  'browserName': 'internet explorer'
	}],

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
