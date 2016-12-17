function NavbarController($scope, $location) {
  var ctrl = this;

  ctrl.getuser = localStorage.getItem('facebook');
  $scope.userPath = ctrl.getuser;


  $scope.$watch(function () {
        return ctrl.getuser;
    }, function (newValue, oldValue) {
        $scope.userPath = newValue;
    }, true);

  $scope.isLoggedIn = function() {
    if ($scope.userPath != "") {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.isNotLoggedIn = function() {
    if ($scope.userPath == '') {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.hasList = function() {
    if ($scope.userPath != '') {
      return "display:inline";
    } else {
      return "display:none";
    }
  }

  $scope.logMeOut = function() {
    $scope.userPath = '';
    $location.path(`/sign_up`);
  }


}

angular
  .module('app')
  .controller('NavbarController', NavbarController)
