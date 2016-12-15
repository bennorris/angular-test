function MusicController(Album, $scope) {
  var ctrl = this;
  $scope.listeners = [];
  $scope.items = [];
  $scope.full = [];
  $scope.style = "none";

$scope.searchRecord = function () {
  $scope.items = [];
  Album
    .getAlbum($scope.search)
    .then(function(result) {
      ctrl.data = result.data;
      $scope.full = Album.getDetailedAlbum(result.data);
      $scope.search = '';
      console.log($scope.full);
    })
}

$scope.showDetails = function() {
  $scope.style = "inline"
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
