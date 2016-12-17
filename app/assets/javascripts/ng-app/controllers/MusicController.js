function MusicController(Album, $scope, $http) {
  var ctrl = this;
  $scope.listeners = [];
  $scope.items = [];
  $scope.full = [];
  $scope.style = "none";
  var open = false;
  var user = localStorage.getItem('facebook');
  $scope.userFacebook = user;



$scope.searchRecord = function () {
  $scope.afterPost = '';
  $scope.items = [];
  Album
    .getAlbum($scope.search)
    .then(function(result) {
      ctrl.data = result.data;
      $scope.full = Album.getDetailedAlbum(result.data);
      $scope.search = '';
    })
    .catch(function(error) {
      $scope.musicFail = "Sorry, we couldn't find " + $scope.search + ". Please check your spelling and search again."
      $scope.full = [];
      $scope.search = '';
    })
}


$scope.showDetails = function() {
  if (open === false) {
  $scope.style = "inline"
  open = !open;
 }
  else {
    $scope.style = "none";
    open = !open;
  }
}

  $scope.addToList = function(name,record, img, index) {
    var vals = {facebook: $scope.userFacebook, artist: name, content: record, medium: "music", img: img}
    $http.post('/users/' + $scope.userFacebook + '/list', vals)
    .then(function(index) {
      console.log(index);
      $scope.afterPost = "Successfully added!"
      })
    .catch(function(index) {
      $scope.afterPost =  "Sorry, it seems like there was a problem. Please try again later.";
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
