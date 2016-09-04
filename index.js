'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`timestamp-to-milliseconds expected a string, got ${typeof input}`);
	}

	// check for comma seperated millisecond value
	// Ex: 00:00:00,000
	const millisecondsIndex = input.indexOf(',');
	let milliseconds = 0;

	if (millisecondsIndex > -1) {
		milliseconds = parseInt(input.substr(millisecondsIndex + 1), 10);
		input = input.substr(0, millisecondsIndex);
	}

	const times = input.split(':').map(number => {
		return parseInt(number, 10);
	});

	if (times.length < 3 || times.length > 4) {
		throw new Error('timestamp-to-milliseconds expected a timestamp format of 00:00:00,000 or 00:00:00');
	}

	let seconds = 0;

	seconds += times[0] * 60 * 60;
	seconds += times[1] * 60;
	seconds += times[2];

	if (times.length === 4) {
		milliseconds = times[3];
	}

	// convert seconds to milliseconds
	seconds *= 1000;
	return milliseconds + seconds;
};
