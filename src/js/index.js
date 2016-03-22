require('./modules/weather-forcast');

angular
  .module('app', [
    'weatherForcast'
  ])
  .controller('ctrl', ctrl);

function ctrl() {};
