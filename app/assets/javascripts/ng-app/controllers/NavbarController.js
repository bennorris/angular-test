function NavbarController($scope, $location, $localStorage) {
  var ctrl = this;

  $scope.getuser = localStorage.getItem('facebook');
  $scope.userPath = $localStorage.facebook;

  $scope.isLoggedIn = function() {
    if ($localStorage.facebook != "") {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.isNotLoggedIn = function() {
    if ($localStorage.facebook == '') {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.hasList = function() {
    if ($localStorage.facebook != '') {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.logMeOut = function() {
    $localStorage.facebook = '';
    $location.path(`/sign_up`);
  }


}

angular
  .module('app')
  .controller('NavbarController', NavbarController)
