app.controller('usersController', ['$scope', '$location', 'usersFactory', function ($scope, $location, usersFactory) {

	$scope.user = {};
	$scope.errors = null;
	$scope.login_errors = null;
	// $scope.test = 'testingTHINGS';
	var apple = null;

	$scope.printOut = function(data) {
		$scope.errors = data;
	}

	$scope.userReg = function() {
		console.log($scope.newUser);
		usersFactory.create($scope.newUser, function(data){
			if (data.message === "User validation failed") {
				$scope.errors = data;
				// $location.url('/')	
			} else {
				$scope.user = data;
				$location.url('/success');
			}
		})	
	}

	$scope.loginReg = function() {
		console.log($scope.possibleUser);
		usersFactory.login($scope.possibleUser, function(data){
			if (data.name === "Validation error") {
				$scope.login_errors = data;
				// $location.url('/')
				console.log("STR", $scope.errors);
				console.log($scope.test);
			} 
			else {
				// $scope.user = data;
				// console.log($scope.user)
				$location.url('/success');	
			}
		})
	}

	$scope.testing = function() {
		$scope.test = 'in test function';
	}

}]);