var curry = function(func) {
  var arn = func.length;
  var i = 0;


  return function f1() {
    var args = Array.prototype.slice.call(arguments);
    i += args.length;

    if (args.length >= arn) {
      return func.apply(null, arguments);
    } else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments);

        return f1.apply(null, args.concat(args2));
      }
    }
  };
};

module.exports = curry;
