weatherService.$inject = ['$http'];

function weatherService($http) {
  return {
    get: function() {
      return 'Hello from the weatherService!'
    }
  }
}

module.exports = weatherService;
