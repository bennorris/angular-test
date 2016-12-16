function UserSessionsController ($scope, UserService) {

  $scope.FBLogin = function() {
    FB.login(function(response) {
        if (response.status === 'connected') {
          console.log(response);
          FB.api('/me', {fields: 'last_name'}, function(res) {
              console.log(res);
          });
      } else if (response.status === 'not_authorized') {
      //logged into fb but not the app
    } else {
      //not logged into fb, not sure if they're logged into app
    }
  }, {scope: 'public_profile'});
  }

  $scope.FBLogout = function() {
  FB.logout(function(response) {
    console.log(response);
   // Person is now logged out
 });
}

  $scope.clicker = function () {
    UserService.findOrCreate()
    .then(function(res) {
      console.log(res);
    })
  }



}


angular
  .module('app')
  .controller('UserSessionsController', UserSessionsController )
