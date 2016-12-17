function UserListController($localStorage, $scope, $location, $anchorScroll, $http, SortMedia) {

  var user = localStorage.getItem('name');
  var fbId = localStorage.getItem('facebook')
  $scope.userName = user;
  $scope.listData;

  $scope.scrollToMusic = function () {
    $scope.listData = SortMedia.getAndSort("music");
    $location.path(`/users/${fbId}/music-list`);
    $location.hash('top-of-music');
    $anchorScroll();
}

$scope.scrollToMovies = function () {
  $scope.listData = SortMedia.getAndSort("film");
  $location.path(`/users/${fbId}/movie-list`);
  $location.hash('top-of-movies');
  $anchorScroll();
}

$scope.removeRecord = function(artist, content, type) {
  var vals = {artist: artist, content: content, facebook: fbId};
  $http.post('users/' + user + '/delete', vals)
  .then(function(res) {
    if (type == "music") {
    $scope.listData = SortMedia.getAndSort("music");
    }  else {
    $scope.listData = SortMedia.getAndSort("film");
    }
  })
  .catch(function(error) {
    console.log(error)
  })
}


}

angular
  .module('app')
  .controller('UserListController', UserListController)
