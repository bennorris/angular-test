function ratingsFilter() {
  return function(movies) {
    return movies.sort(function(a,b) {
      if (a.data.vote_average < b.data.vote_average) {
        return 1;
      }
      if (a.data.vote_average > b.data.vote_average) {
        return -1;
      }
      return 0;
    });
    }
}

angular
  .module('app')
  .filter('ratingsFilter', ratingsFilter)
