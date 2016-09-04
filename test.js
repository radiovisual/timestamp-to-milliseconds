import test from 'ava';
import fn from './';

test('expects a string', t => {
	t.throws(() => {
		fn({});
	}, 'timestamp-to-milliseconds expected a string, got object');
});

test('expects the format hh:mm:ss', t => {
	t.throws(() => {
		fn('01:02');
	}, 'timestamp-to-milliseconds expected a timestamp format of 00:00:00,000 or 00:00:00');
});

test('returns a number', t => {
	t.is(typeof fn('00:00:01'), 'number');
});

test('converts to milliseconds', t => {
	t.is(fn('01:02:03'), 3.6e+6 + 120000 + 3000);
	t.is(fn('02:10:59'), 7.2e+6 + 600000 + 59000);
});

test('allows comma-delimited millseconds', t => {
	t.is(fn('00:00:01,345'), 1000 + 345);
	t.is(fn('00:00:59,345'), 59000 + 345);
});

test('allows colon-delimited millseconds', t => {
	t.is(fn('00:00:01:345'), 1000 + 345);
	t.is(fn('00:00:59:345'), 59000 + 345);
});
