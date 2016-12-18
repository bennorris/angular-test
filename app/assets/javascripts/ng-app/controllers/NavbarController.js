function NavbarController($scope, $location, $localStorage) {
  var ctrl = this;

  $scope.getuser = localStorage.getItem('facebook');


  // $scope.$watch('getuser', function(newVal, oldVal) {
  //   console.log("This is the new val " + newVal + " and this is the old: " + oldVal)
  // })

  $scope.$watch(function () {
      return $localStorage.facebook;
  }, function (newVal, oldVal) {
      console.log("new = " +newVal+" old= " + oldVal);
  })



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
