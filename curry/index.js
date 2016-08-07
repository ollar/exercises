var curry = function(func) {
  var arn = func.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments);

    if (args.length >= arn) {
      return func.apply(null, arguments);
    } else {
      return function() {
        var args2 = Array.prototype.slice.call(arguments);

        return f1.apply(null, args.concat(args2));
      }
    }
  };
};

module.exports = curry;
