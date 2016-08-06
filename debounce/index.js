var debounce = function(func, timeout) {
  var tid;

  return function() {
    var _this = this;
    var args = Array.prototype.slice.call(arguments);
    clearTimeout(tid);
    tid = setTimeout(function() {
      func.apply(_this, args);
    }, timeout);
  }
};

module.exports = debounce;
