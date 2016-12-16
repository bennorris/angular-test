function CustomNavbar () {
  return {
    restrict: 'E',
    templateUrl: 'navbar.html',
    controller: 'NavbarController'
  }

}

angular
  .module('app')
  .directive('navigate', CustomNavbar)
