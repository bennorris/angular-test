function NavbarController($scope) {

  var userpath = localStorage.getItem('facebook');
  $scope.userPath = userpath;

  $scope.isLoggedIn = function() {
    if (userpath != "") {
      return "log out";
    } else {
      return "";
    }
  }

  $scope.isNotLoggedIn = function() {
    if (!userpath) {
      return "log in";
    } else {
      return "";
    }
  }

  $scope.hasList = function() {
    if (userpath) {
      return "my list";
    } else {
      return "";
    }
  }


}

angular
  .module('app')
  .controller('NavbarController', NavbarController)
