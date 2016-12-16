function HomeCtrl($scope) {

  var user = localStorage.getItem('facebook');
  $scope.userPath = user;

  console.log($scope.userPath);
}

angular
  .module('app')
  .controller('HomeCtrl', HomeCtrl)
