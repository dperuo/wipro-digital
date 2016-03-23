var moment = require('moment');

module.exports = function() {

  /**
   * @param {Object} config - Configuration object.
   * @property {String} config.input - input format.
   * @property {String} config.output - output format.
   */

  return function(input, config) {
    return (input) ? moment.utc(input, config.input).format(config.output) : '';
  };
}
