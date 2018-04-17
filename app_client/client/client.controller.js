angular.module('DroneCafeApp') 
.controller('clientCtrl', clientCtrl);

clientCtrl.$inject = ['MenuService']
function clientCtrl(MenuService) {
    this.menu = MenuService;
    this.production;
}