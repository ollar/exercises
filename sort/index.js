var arr = [5, 1, 2, 4, 3];
var sort = function(array) {
  var resArr = [];

  function findMinItem(_arr) {
    var min = _arr[0];
    for (var i = 0, arrLength = _arr.length; i < arrLength; i++) {
      if (_arr[i] < min) {
        min = _arr[i];
      }
    }
    resArr.push(min);
    array.splice(array.indexOf(min), 1);
    console.log(array);
    if (array.length) {
      return findMinItem(array);
    }
  }

  findMinItem(array);

  return resArr;
};

module.exports = sort;
