function UserListController($localStorage, $scope, $location, $anchorScroll, $http) {

  var user = localStorage.getItem('name');
  var fbId = localStorage.getItem('facebook')
  $scope.userName = user;
  $scope.listData;

  $scope.scrollToMusic = function () {
    $http.get(`/users/${fbId}/list.json`)
      .then(function(res) {
        console.log(res);
        $scope.listData = res.data.items
      })
    $location.path(`/users/${fbId}/music-list`);
    $location.hash('top-of-music');
    $anchorScroll();
}

$scope.removeRecord = function() {
  console.log("I AM TRYING TO DELETE.")
  // var vals = {artist: artist, album: album}
  // $http.post('users/' + user + '/delete', vals)
}



}

angular
  .module('app')
  .controller('UserListController', UserListController)
