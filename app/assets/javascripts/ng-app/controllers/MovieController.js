function MovieController($scope, GetDirectorId, DirectorCredits, ListDirectorFilms, GetReviews) {
  var ctrl = this;
  $scope.searchTerm = '';
  ctrl.data = [];
  ctrl.films = []; //this array = list of films w id included
  ctrl.reviews = [];


 $scope.testing = function() {
  GetDirectorId
    .query($scope.searchTerm)
    .then(function(response) {
      DirectorCredits
       .getMovies(response.data.results[0].id)
      .then(function(res) {
        ctrl.data = res.data;
        ctrl.films = ListDirectorFilms.createList(ctrl.data.crew);
        ctrl.reviews = GetReviews.findReview(ctrl.films);
        console.log(ctrl.reviews);
        })
      })
      $scope.searchTerm = '';
  }


}



angular
  .module('app')
  .controller('MovieController', MovieController)
