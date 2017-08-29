'use strict'
const _ = require('lodash')

module.exports = (logSources, printers) => {
	logSources.forEach((logSource, i) => {
		let logEntry = logSource.last;
		while(logEntry) {
			printers[i].print(logEntry);
			logEntry = logSource.pop();
		}
		printers[i].done();
	});
	
	// throw new Error('Not implemented yet!  That part is up to you!')
}