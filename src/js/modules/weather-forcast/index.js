var template = require('./template.html');
var weatherService = require('./weatherService');

angular
  .module('weatherForcast', [])
  .factory('weatherService', weatherService)
  .directive('weatherForcast', weatherForcast);

weatherForcast.$inject = ['weatherService'];

function weatherForcast(weatherService) {
  return {
    restrict: 'E',
    replace: false,
    scope: {},
    template: template,
    link: function(scope, elem, attr, ctrl) {
      var vm = scope;
      vm.showWeather = false;
      vm.locale = false;

      vm.getWeather = function() {
        vm.showWeather = false;
        vm.locale = false;

        weatherService.get({
          city: vm.search,
        }).then(function(response) {
          var data = response.data;
          vm.weather = data;
          vm.locale = data.city.name;
          vm.showWeather = true;
        })
      }
    }
  }
}
