weatherService.$inject = ['$q', '$http'];

function weatherService($q, $http) {
  return {
    get: function() {
      return $q(function(resolve, reject) {
        $http
          .get('https://api.github.com/emojis')
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
