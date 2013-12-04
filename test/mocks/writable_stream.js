/**
 * Just a buffer really, but one that implements the Writeable class
 * @type {WritableStream}
 */
module.exports = MockWritableStream;

var Writable = require('stream').Writable;
var util = require('util');

function MockWritableStream(opts) {
  Writable.call(this, opts);

  this._write = function (chunk, encoding, cb) {

  };
}

util.inherits(MockWritableStream, Writable);