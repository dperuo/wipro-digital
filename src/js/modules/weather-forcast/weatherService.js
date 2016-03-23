weatherService.$inject = ['$q', '$http'];

function weatherService($q, $http) {

  /**
   * All config objects take the same signature:
   *
   * @param {Object} config - Configuration object.
   *
   * @property {String} config.city - City name
   */

  return {
    get: function(config) {
      return $q(function(resolve, reject) {
        $http
          .get('http://api.openweathermap.org/data/2.5/forecast', {
            params: {
              APPID: '0f515d7723e2c5ddec881b8ff0004c38',
              q: config.city + ',us'
            }
          })
          .then(function(success) {
            resolve(success);
          },
          function(error) {
            reject(error)
          })
      })
    }
  }
}

module.exports = weatherService;
