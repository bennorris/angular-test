function MusicController(Album, $scope, $http, $localStorage) {
  var user = $localStorage.facebook;
  $scope.message = ["", "", ""]

  $scope.searchRecord = function () {
    Album
      .getAlbum($scope.search)
      .then(function(result) {
        $scope.full = Album.getDetailedAlbum(result.data);
        $scope.search = '';
      })
      .catch(function(error) {
        $scope.musicFail = "Sorry, we couldn't find " + $scope.search + ". Please check your spelling and search again."
        $scope.full = [];
        $scope.search = '';
      })
    }


  $scope.addToList = function(name,record, img, $index) {
    var vals = {facebook: user, artist: name, content: record, medium: "music", img: img}
    $http.post('/users/' + user + '/list', vals)
    .then(function() {
      $scope.message[$index] = "Successfully added!"
      })
    .catch(function() {
      $scope.message[$index] =  "Sorry, it seems like there was a problem. Please try again later.";
    })
  }

  $scope.orderThings = function(plays) {
    var spins = parseInt(plays.data.album.playcount)
    return spins;
  }

}

angular
  .module('app')
  .controller('MusicController', MusicController);
