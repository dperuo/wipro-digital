angular
  .module('app', [])
  .controller('ctrl', ctrl);

function ctrl() {
  var vm = this;

  vm.hello = 'world';
  vm.array = [1, 2, 3, 0, 4, 5];

  console.log('Totally rad, dude!')
}
