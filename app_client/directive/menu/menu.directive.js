angular
    .module('DroneCafeApp')
    .directive('menu', menu);

function menu() {
    return {
        restrict: 'EA',
        templateUrl: '/directive/menu/menu.view.html',
        controller: 'menuCtrl'
    };
}