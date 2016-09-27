var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

	$routeProvider
	    .when('/', {
	    	templateUrl: 'partials/index.html'
	    })
	    .when('/success', {
	    	templateUrl: 'partials/success.html'
	    })
	    .otherwise({
	    	redirectTo: '/'
	    })

});