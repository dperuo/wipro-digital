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

      console.log(weatherService.get())

      vm.array = [1, 2, 3, 0, 4, 5];
    }
  }
}
