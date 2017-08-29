'use strict'

module.exports = (logSources, printers) => {
	var i = 0;
	const loop = (logEntry) => {
		printers[i].print(logEntry);
		logSources[i].popAsync().then((msg) => {
			if (msg) {
				loop(msg);
			} else {
				printers[i].done();
				i++;
				if (i < logSources.length) {
					loop(logSources[i].last);
				}
			}
		});
	}

	loop(logSources[i].last);
}