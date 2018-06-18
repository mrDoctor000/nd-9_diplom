angular.module('DroneCafeApp')
    .controller('clientCtrl', function (userService) {   
        let socket = io();

        this.isLogIn = userService.isLogIn();

        this.openModal = function() {
            $('.modal .login').modal();
            $('.modal .login').modal('open');
        }


    });