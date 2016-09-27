app.controller('successController', ['$scope', '$location', 'usersFactory', function ($scope, $location, usersFactory) { 

	$scope.user = {};

	usersFactory.getUser(function(data){
		$scope.user = data;
	})

	$scope.logout = function() {
		$scope.user = {};
		console.log($scope.user);
		$location.url('/')
	}

}]);