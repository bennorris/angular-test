function MusicController(Album, $scope) {
  var ctrl = this;
  $scope.listeners = [];
  $scope.items = [];
  $scope.full = [];
  $scope.style = "none";
  var open = false;

$scope.searchRecord = function () {
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

// $scope.getAlbumInfo = function() {
//   $scope.recordInfoz = [];
//   var slamDunk = ctrl.data.topalbums.album;
//   slamDunk.sort(function(a,b) {
//     return parseFloat(b.playcount) - parseFloat(a.playcount)
//   })
//
//   for (var i = 0; i < 3; i++) {
//     Album.getDetailedAlbum(slamDunk[i].artist.name, slamDunk[i].name)
//     .then(function(res) {
//       $scope.description.push(res.data.album.wiki.content);
//     })
//   }
// }


}

angular
  .module('app')
  .controller('MusicController', MusicController);
