function DirectorCredits($http) {

  var moviekey = config.MOVIE_KEY;

  this.getMovies = function(id) {
    return $http.get('https://api.themoviedb.org/3/person/' + id +'/movie_credits?api_key=' + moviekey + '&language=en-US');
  }
}

angular
    .module('app')
    .service('DirectorCredits',DirectorCredits);
