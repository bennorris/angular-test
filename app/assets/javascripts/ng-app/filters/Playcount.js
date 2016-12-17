function Playcount () {
  return function(item) {
   return parseInt(item).toLocaleString('en-US');
 };
}


angular
  .module('app')
  .filter('Playcount', Playcount)
