function SortMedia($http) {
  var fbId = localStorage.getItem('facebook');

  this.getAndSort = function(medium) {
    var matches = []
    $http.get(`/users/${fbId}/list.json`)
    .then(function(res) {
      for (var i = 0; i < res.data.items.length; i++) {
        if (res.data.items[i].medium == medium) {
          matches.push(res.data.items[i])
         }
       }
     });
     return matches;
   }


}


angular
  .module('app')
  .service('SortMedia', SortMedia)
