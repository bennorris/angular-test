angular
  .module('app', ['ui.router', 'ngSanitize', 'templates', 'ngStorage'])
  .config(function($stateProvider) {
      $stateProvider
        .state('music',  {
          url: '/music',
          templateUrl: 'music/music.html',
          controller: 'MusicController'
        })
        .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        })
        .state('film', {
          url: '/film',
          templateUrl: 'movies/movie.html',
          controller: 'MovieController'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        .state('signUp', {
          url: '/sign_up',
          templateUrl: 'users/sign_up.html',
          controller: 'UserSessionsController'
      })
      .state('user', {
        url: '/users/:id',
        templateUrl: 'users/list.html',
        controller: 'UserListController'
      })
      .state('user.musiclist', {
        url: '/music-list',
        templateUrl: 'users/music-list.html',
        controller: 'UserListController'
      })
      .state('user.movielist', {
        url: '/movie-list',
        templateUrl: 'users/movie-list.html',
        controller: 'UserListController'
      })

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
