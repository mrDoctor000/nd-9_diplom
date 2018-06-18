angular
    .module('DroneCafeApp')
    .controller('loginCtrl', function (clientFactory, userService) {
        this.status;
        this.isLogIn = userService.isLogin();

        this.logIn = function (user) {
            clientFactory.getUser(user).then(function (responce) { //OK
                this.status = 'log in';
                userService.setUser(responce.data);
                $('.modal .login').modal('close');
            }, function (responce) { //not OK
                if (responce.data.message === 'Пользователь не найден') {
                    const newUser = {
                        name: user.name,
                        email: user.email
                    }
                    clientFactory.createUser(newUser).then(function (responce) { // create user if we didn't find
                        this.status = 'user created'
                        userService.setUser(responce.data);
                        $('.modal .login').modal('close');
                    })
                }
            })
        }

    });