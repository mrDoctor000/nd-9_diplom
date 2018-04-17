angular
    .module('DroneCafeApp')
    .directive('login', login);

function login() {
    return {
        restrict: 'EA',
        templateUrl: '/directive/login/login.view.html',
        controller: 'navigationCtrl as navvm'
    };
}