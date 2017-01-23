function GetReviews($http) {
  var moviekey = config.MOVIE_KEY;


  this.findReview = function(films) {
    var scores = [];
    for (var i = 0; i < films.length; i++) {
      $http.get('https://api.themoviedb.org/3/movie/' + films[i].id +'?api_key=' + moviekey + '&language=en-US')
      .then(function(res){
        scores.push(res);
      })
    }
    return scores;
   }
}

angular
  .module('app')
  .service('GetReviews', GetReviews)
