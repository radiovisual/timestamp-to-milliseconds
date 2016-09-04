# timestamp-to-seconds [![Build Status](https://travis-ci.org/radiovisual/timestamp-to-milliseconds.svg?branch=master)](https://travis-ci.org/radiovisual/timestamp-to-milliseconds)

> Convert a timestamp string to milliseconds. '00:00:02,345' → 2345


## Install

```
$ npm install --save timestamp-to-milliseconds
```


## Usage

```js
const milliseconds = require('timestamp-to-milliseconds');

milliseconds('00:00:59,345');
//=> 59345

milliseconds('00:00:59');
//=> 59000
```


## API

### timestampToMilliseconds(timestamp)

Returns the timestamp's total number of milliseconds.

#### timestamp

Type: `string`

The timestamp in the format of `HH:MM:SS` or `HH:MM:SS,000` that you want to convert to milliseconds.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
