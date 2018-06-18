angular
    .module('DroneCafeApp')
    .controller('userInfoCtrl', function (clientFactory, userService) {
        this.user = userService.getUser();
        
        this.addBalance = function() {
            this.user.balance += 100;
            
            clientFactory
        }
    });