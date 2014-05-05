module.exports = function (fn) {
  return function (a, b) {
    return fn.call(this, a, b);
  }
};
