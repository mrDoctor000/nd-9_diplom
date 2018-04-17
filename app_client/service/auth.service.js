angular.module('DroneCafeApp')
    .service('AuthService', authService);

    authService.$inject = ['$cookies', '$http', 'Restangular']
    function authService($cookies, $http, Restangular) {
        'use strict';

        var self = this;
        this.status = {
            authorized: false,
        };

        this.loginByCredentials = function (username, email) {

        };

        this.loginByToken = function (token) {

        };

        this.logout = function () {
            self.status.authorized = false;
            $cookies.accessToken = '';
        };
    }