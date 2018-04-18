angular
	.module('DroneCafeApp', [ 'ui.router']) // , 'auth' , 
	.controller('droneCtrl', droneCtrl)


function droneCtrl($scope) {
	$scope.email="m@m.ru";
}