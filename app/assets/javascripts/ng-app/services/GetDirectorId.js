function GetDirectorId($http) {

  var moviekey = config.MOVIE_KEY;


  this.query = function (name) {
    return $http.get('https://api.themoviedb.org/3/search/person?api_key=' + moviekey + '&language=en-US&query=' + name + '&page=1')
  }



  getMovieRatings = function(movies) {
    var ranked = [];
    for (var i=0;i<movies.length;i++) {
      $http.get('https://api.themoviedb.org/3/movie/' + movies[i].id + '?api_key=' + moviekey + '&language=en-US')
      .then(function(res) {
        ranked.push(res.data)
      })
    }
    return ranked;
  }


}


angular
  .module('app')
  .service('GetDirectorId', GetDirectorId);
