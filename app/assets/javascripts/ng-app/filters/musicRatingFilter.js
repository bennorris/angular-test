function musicRatingFilter() {
  return function(results) {
    return results.sort(function(a,b) {
      if (a.playcount < b.playcount) {
        return 1;
      }
      if (a.playcount > b.playcount) {
        return -1;
      }
      return 0;
    });
   }
}

angular
  .module('app')
  .filter('musicRatingFilter', musicRatingFilter)
