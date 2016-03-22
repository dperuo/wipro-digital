var template = require('./template');

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

    }
  }
}
