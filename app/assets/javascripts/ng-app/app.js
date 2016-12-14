angular
  .module('app', ['ngRoute', 'ngSanitize', 'templates'])
  .config(function($routeProvider) {
      $routeProvider
        .when('/music',  {
          templateUrl: 'music/music.html',
          controller: 'MusicController'
        })
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        })
        .when('/film', {
          templateUrl: 'movies/movie.html',
          controller: 'MovieController'
        });
      })
