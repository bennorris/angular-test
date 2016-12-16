function UserSessionsController ($localStorage, $scope, UserService) {


  // localStorage.username = UserService.getUserId;
  $scope.grab = UserService.getUserId;
  $scope.num = UserService.getUserNum;

  $scope.FBLogin = function() {
    FB.login(function(response) {
        if (response.status === 'connected') {
          FB.api('/me', {fields: 'first_name,id'}, function(res) {
             UserService.findOrCreate(res);
          });
      } else if (response.status === 'not_authorized') {
          console.log('not authorized');
      //logged into fb but not the app
    } else {
      console.log('not logged into fb');
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
