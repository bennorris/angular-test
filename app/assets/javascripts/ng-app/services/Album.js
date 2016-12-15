function Album($http) {

var lastFmKey = config.LASTFM_KEY;

this.getAlbum = function(artist) {
  return $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=' + lastFmKey + '&format=json')
 }

this.getDetailedAlbum = function(arr) {
  var full = [];
  var slamDunk = arr.topalbums.album;
  slamDunk.sort(function(a,b) {
    return parseFloat(b.playcount) - parseFloat(a.playcount)
  })

  for (var i = 0; i < 3; i++) {
    $http.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + lastFmKey + '&artist=' + slamDunk[i].artist.name + '&album=' + slamDunk[i].name + '&format=json')
    .then(function(res) {
      full.push(res)
    })
 }
 return full;
}

}
angular
  .module('app')
  .service('Album', Album);
