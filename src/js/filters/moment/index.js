var moment = require('moment');

module.exports = function() {
  return function (input, format) {
    return input ? moment.utc(input, format.input).format(format.output) : '';
  };
}
