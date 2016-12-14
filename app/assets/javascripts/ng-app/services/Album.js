function Album($http) {

var lastFmKey = config.LASTFM_KEY;

this.getAlbum = function(artist) {
  return $http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=' + lastFmKey + '&format=json')
 }

}

angular
  .module('app')
  .service('Album', Album);
