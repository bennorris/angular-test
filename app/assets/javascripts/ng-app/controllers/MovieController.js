function MovieController($scope, GetDirectorId, DirectorCredits, ListDirectorFilms, GetReviews, $http) {
  var ctrl = this;
  $scope.searchTerm = '';
  var user = localStorage.getItem('facebook');
  $scope.userFacebook = user;
  $scope.searchMovies = '';
  $scope.message = ["", "", ""]



 $scope.findFilm = function() {
   $scope.movieFail = "";
   ctrl.director = $scope.searchTerm;
  GetDirectorId
    .query($scope.searchTerm)
    .then(function(response) {
      DirectorCredits
       .getMovies(response.data.results[0].id)
      .then(function(res) {
        ctrl.data = res.data;
        ctrl.films = ListDirectorFilms.createList(ctrl.data.crew);
        ctrl.reviews = GetReviews.findReview(ctrl.films);
        $scope.searchTerm = '';
        })
      })
      .catch(function(error) {
        $scope.movieFail = "Sorry, we couldn't find " + $scope.searchTerm + ". Please check your spelling and search again."
        $scope.searchTerm = '';
      })

  }

  $scope.addToMovieList = function(film, img, $index) {
    var vals = {facebook: $scope.userFacebook, artist: ctrl.director, content: film, medium: "film", img: img}
    $http.post('/users/' + $scope.userFacebook + '/list', vals)
    .then(function() {
      $scope.message[$index] = "Successfully added!"
      })
    .catch(function() {
      $scope.moviePost =  "Sorry, it seems like there was a problem. Please try again later.";
    })
  }


}



angular
  .module('app')
  .controller('MovieController', MovieController)
