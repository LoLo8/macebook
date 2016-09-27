var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    
    .when('/', {
        templateUrl: '/static/partials/index.html',
        controller: 'indexController'
    })
    .when('/friends/:id/edit', {
        templateUrl: '/static/partials/edit.html',
        controller: 'editController',
    })
    .when('/friends/new', {
        templateUrl: '/static/partials/new.html',
        controller: 'newController',
    })
    .when('/friends/:id', {
        templateUrl: '/static/partials/show.html',
        controller: 'showController',
    })
    .otherwise({
        redirectTo: '/'
    });
});