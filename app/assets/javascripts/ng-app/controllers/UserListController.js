function UserListController($localStorage, $scope, $location, $anchorScroll, $http) {

  var user = localStorage.getItem('name');
  var fbId = localStorage.getItem('facebook')
  $scope.userName = user;
  $scope.listData;

  $scope.scrollToMusic = function () {
    $http.get(`/users/${fbId}/list.json`)
      .then(function(res) {
        var matches = []
        for (var i = 0; i < res.data.items.length; i++) {
          if (res.data.items[i].medium == "music") {
            matches.push(res.data.items[i])
        }
      }
       $scope.listData = matches;
    })
    $location.path(`/users/${fbId}/music-list`);
    $location.hash('top-of-music');
    $anchorScroll();
}

$scope.scrollToMovies = function () {
  $http.get(`/users/${fbId}/list.json`)
    .then(function(res) {
      var matches = []
      for (var i = 0; i < res.data.items.length; i++) {
        if (res.data.items[i].medium == "film") {
          matches.push(res.data.items[i])
      }
    }
     $scope.listData = matches;
  })
  $location.path(`/users/${fbId}/movie-list`);
  $location.hash('top-of-movies');
  $anchorScroll();
}

$scope.removeRecord = function(artist, album) {
  var vals = {artist: artist, album: album, facebook: fbId};
  $http.post('users/' + user + '/delete', vals)
  .then(function(res) {
    $http.get(`/users/${fbId}/list.json`)
      .then(function(res){
        $scope.listData = res.data.items;
      })
  })
  .catch(function(error) {
    console.log(error)
  })
}



}

angular
  .module('app')
  .controller('UserListController', UserListController)
