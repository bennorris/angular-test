function MusicController(Album, $scope) {
  var ctrl = this;

$scope.searchRecord = function () {
  Album
    .getAlbum($scope.search)
    .then(function(result) {
      ctrl.data = result.data;
      $scope.search = '';
    })

}

}

angular
  .module('app')
  .controller('MusicController', MusicController);
