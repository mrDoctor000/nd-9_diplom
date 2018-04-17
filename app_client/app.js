angular
	.module('DroneCafeApp', ['ngRoute', 'ui.router']) // , 'auth' , 
	.controller('droneCtrl', droneCtrl)

	.config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
		$stateProvider
			.state('client', {
				url: "/",
				templateUrl: "client/client.view.html",
				controller: "clientCtrl as vm"
			})
			.state('kitchen', {
				url: "/kitchen",
				templateUrl: "kitchen/kitchen.view.html"
			})
	}]);

function droneCtrl($scope) {
	$scope.email="m@m.ru";
}