// NPM Dependencies
const assert = require('assert');
const { interval } = require('rxjs');

// Local Depdendencies
const { version } = require('../package.json');

let defaults = {
	logLevel: 'error'
};

module.exports = class LeetModule {
	/**
	 * @param {ClientWrapper} client
	 * @param {object} options
	 * @param {string} options.channel
	 * @param {string} options.logLevel='error'
	 */
	constructor(client, options) {
		assert.match(options.channel, /^#.+/i);

		/** @type {object} */
		this.settings = { ...defaults, ...options };
		/** @type {string} */
		this.version = version;

		let { logger } = client;

		//  ____  _
		// / ___|| |_ _ __ ___  __ _ _ __ ___  ___
		// \___ \| __| '__/ _ \/ _` | '_ ` _ \/ __|
		//  ___) | |_| | |  __/ (_| | | | | | \__ \
		// |____/ \__|_|  \___|\__,_|_| |_| |_|___/
		//

		let interval$ = interval(1000 * 60);

		//  ____        _                   _       _   _
		// / ___| _   _| |__  ___  ___ _ __(_)_ __ | |_(_) ___  _ __  ___
		// \___ \| | | | '_ \/ __|/ __| '__| | '_ \| __| |/ _ \| '_ \/ __|
		//  ___) | |_| | |_) \__ \ (__| |  | | |_) | |_| | (_) | | | \__ \
		// |____/ \__,_|_.__/|___/\___|_|  |_| .__/ \__|_|\___/|_| |_|___/
		//                                   |_|
		//

		interval$.subscribe(() => {
			var now = new Date();

			if (now.getHours() == 13 && now.getMinutes() == 37) {
				logger.info('RxBot 13:37');

				client.tell(this.settings.channel, '13:37');
			}
		});
	}
};
