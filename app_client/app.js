angular
	.module('DroneCafeApp', ['ngRoute', 'ngResource']) // , 'auth' , 
	.controller('droneCtrl', function () {

	})
	.config('$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'client/client.view.html',
					controller: 'clientCtrl'
				})
				.when('/kitchen', {
					templateUrl: 'kitchen/kitchen.view.html',
					controller: 'kitchenCtrl'
				})
		})