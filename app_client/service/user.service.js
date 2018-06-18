angular.module('DroneCafeApp')
    .service('userService', function (clientFactory) {
        this.user = {};
        return {
            setUser: function (user) {
                this.user = user;
            },
            getUser: function () {
                return this.user
            },
            isLogIn: function () {
                if (this.user.email) {
                    return true;
                } else {
                    return false;
                }
            },
            updateBalance: function(galCr) {
                this.user.balance += galCr;
                clientFactory.updateBalance(this.user);
            }
        }
    })