angular
    .module('DroneCafeApp')
    .directive('droneFooter', droneFooter);

function droneFooter() {
    return {
        restrict: 'EA',
        templateUrl: '/directive/droneFooter/droneFooter.view.html'
    };
}