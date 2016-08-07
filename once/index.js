var once = function(func) {
  var result = false;

  return function() {
    if (result === false) {
      result = func.apply(this, arguments);
    }
    return result;
  };
};


module.exports = once;
