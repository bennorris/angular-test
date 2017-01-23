function UserListController($localStorage, $scope, $location, $anchorScroll, $http, SortMedia) {
  var user = $localStorage.name;
  var fbId = $localStorage.facebook;
  $scope.userName = user;



  $scope.scrollToMusic = function () {
    $scope.listData = SortMedia.getAndSort("music");
    console.log($scope.listData);
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

  $scope.removeRecord = function(artist, content, type, $index) {
    var vals = {artist: artist, content: content, facebook: fbId};
    $http.post('users/' + user + '/delete', vals)
    .then(function(res) {
      if (type == "music") {
      $scope.listData = SortMedia.getAndSort("music");
      $scope.deleteMessage = "Successfully deleted."
      }  else {
      $scope.listData = SortMedia.getAndSort("film");
      $scope.deleteMessage = "Successfully deleted."
      }
    })
    .catch(function(error) {
      $scope.deleteMessage = "Sorry, it seems like there was an error here."
    })
  }


}

angular
  .module('app')
  .controller('UserListController', UserListController)
