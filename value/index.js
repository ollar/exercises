var value = function(_val) {
  if (_val.call) {
    return value.call(this, _val());
  }
  return _val;
};

module.exports = value;
