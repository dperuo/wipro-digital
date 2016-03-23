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

      vm.getWeather = function(weatherSearch) {
        vm.locale = weatherSearch;
      }


      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function(position){
      //     scope.$apply(function(){
      //       vm.lat = position.coords.latitude;
      //       vm.lon = position.coords.longitude;
      //
      //       weatherService.get({
      //         lat: vm.lat,
      //         lon: vm.lon
      //       }).then(function(response) {
      //         vm.hasGeoLocation = true;
      //         vm.weather = response.data;
      //       })
      //     });
      //   });
      // }
    }
  }
}
