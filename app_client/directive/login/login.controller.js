angular
    .module('DroneCafeApp')
    .controller('userInfoCtrl', userInfoCtrl);

function userInfoCtrl() {
    this.clientEmail = 'egor@ponomarev.pp.ru'
    this.clientBalans = 100;
    this.logout = function () {

    }
    this.isAutorized = function () {

    }
}