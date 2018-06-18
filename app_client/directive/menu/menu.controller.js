angular
    .module('DroneCafeApp')
    .controller('menuCtrl', function (menuService, userService, clientFactory) {
        this.menu = menuService;
        this.user = userService.getUser();

        this.makeList = function (array) {
            let list = array.join(', ');
            list = list[0].toUpperCase() + list.substr(1, list.length - 3) + ".";
            return list;
        };

        this.addDishToOrder = function(dishId, dishPrice) {
            userService.updateBalance(-dishPrice);

            const newOrder = {
                userEmail: this.user.email,
                menuid: dishId
            }
            clientFactory.createNewOrder(newOrder)
        }

        this.addGalCr = function (galCr) {
            userService.updateBalance(galCr);
        }
    });