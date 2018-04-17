angular
    .module('DroneCafeApp')
    .directive('userInfo', userInfo);

function userInfo() {
    return {
        restrict: 'EA',
        templateUrl: '/directive/userInfo/userInfo.view.html',
        controller: 'userInfoCtrl as uservm'
    };
}