function directorFilter() {
  return function(movies) {
    return movies.filter(function(film) {
      return film.job == "Director"
    })
    }
}

angular
  .module('app')
  .filter('directorFilter', directorFilter)
