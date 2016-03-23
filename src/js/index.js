require('./modules/weather-forcast');
var moment = require('./filters/moment');

angular
  .module('app', ['weatherForcast'])
  .controller('ctrl', function() {})
  .filter('moment', moment)
