function UserListController($localStorage, $scope, UserService) {

  var user = localStorage.getItem('name');
  $scope.userName = user;



}


angular
  .module('app')
  .controller('UserListController', UserListController)
