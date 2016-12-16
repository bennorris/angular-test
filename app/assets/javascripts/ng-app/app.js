angular
  .module('app', ['ngRoute', 'ngSanitize', 'templates', 'ngStorage'])
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
        })
        .when('/about', {
          templateUrl: 'about.html'
        })
        .when('/sign_up', {
        templateUrl: 'users/sign_up.html',
        controller: 'UserSessionsController'
      })
      .when('/users/:id', {
        templateUrl: 'users/list.html',
        controller: 'UserListController'
      });
    });

    window.fbAsyncInit = function() {
      FB.init({
        appId      : config.FACEBOOK_KEY,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
