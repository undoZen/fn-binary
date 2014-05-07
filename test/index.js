var assert = require('assert');
var binary = require('../');
describe('fn-binary', function () {
  it('fn.length should be 2', function () {
    var fn = function (a, b, c) {};
    assert(binary(fn).length == 2);
  });
  it('should be called with exactly two arguments', function () {
    var fn = function (a, b) {
      return arguments.length;
    }
    assert(binary(fn)() == 2);
  });
  it('third argument should be undefined', function () {
    var fn = function (a, b, c) {
      return typeof c;
    }
    assert(binary(fn)(1,2,3,4) === 'undefined');
  });
});
