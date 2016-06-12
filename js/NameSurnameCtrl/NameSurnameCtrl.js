angular.module('app').controller('NameSurnameCtrl', ['$scope', function($scope){
	$scope.name = "";
	$scope.surname = "";
	console.log($scope.items);
	$scope.addData = function($scope){
		console.log($scope.$scope.items);

	}
}]);