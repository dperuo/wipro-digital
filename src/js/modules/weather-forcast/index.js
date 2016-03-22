var template = require('./template.html');

angular
  .module('weatherForcast', [])
  .directive('weatherForcast', weatherForcast)

function weatherForcast() {
  return {
    restrict: 'E',
    replace: false,
    scope: {},
    template: template,
    link: function(scope, elem, attr, ctrl) {
      var vm = scope;

      vm.array = [1, 2, 3, 0, 4, 5];
    }
  }
}
