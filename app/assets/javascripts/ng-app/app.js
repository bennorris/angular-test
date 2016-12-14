angular
    .module('app', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
    });
