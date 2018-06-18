angular
    .module('DroneCafeApp')
    .directive('readyDish', function () {
        return {
            restrict: 'EA',
            templateUrl: '/directive/readyDish/readyDish.view.html',
            controller: 'readyDishCtrl as dishvm'
        };
    });

