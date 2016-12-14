function ListDirectorFilms () {

  this.createList = function(films) {
    var directed = [];
    for (var i=0;i<films.length;i++) {
      if (films[i].job == "Director") {
        directed.push(films[i]);
      }
    }
    return directed;
  }



}


angular
  .module('app')
  .service('ListDirectorFilms', ListDirectorFilms)
