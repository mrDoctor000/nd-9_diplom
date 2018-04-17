angular
    .module('DroneCafeApp')
    .controller('userInfoCtrl', userInfoCtrl);

function userInfoCtrl() {
    this.clientEmail = 'egor@ponomarev.pp.ru'
    this.clientBalans = 100;
    this.logOut = function () {
        this.clientEmail = '';
        this.clientBallance = 0;
    }
    this.addBallance = function() {
        this.clientBalans += 100;
    }
    this.isAutorized = function () {
        if (this.clientEmail) {
            return true;
        } else {
            return false;
        }
    }
}