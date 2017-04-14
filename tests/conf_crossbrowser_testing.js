exports.config = {
	seleniumAddress: 'http://hub.crossbrowsertesting.com:80/wd/hub',


	capabilities: {
		username: 'sergiorivas@gmail.com',
		password: 'uc6534db02a76a29',

		name : 'Test',

		browser_api_name : 'FF31', // change this according to what browser you are using
		browserName: 'firefox', // change this according to what browser you are using 'internet explorer', 'chrome' etc
		os_api_name : 'WinXPSP2-C2', // change this for the OS you are using
		screen_resolution : '1024x768', // change this for the resolution

		// optional recording capabilities
		record_video : 'true',
		record_network : 'true',
		record_snapshot : 'true',

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
