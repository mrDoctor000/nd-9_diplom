angular.module('DroneCafeApp')
    .factory('clientFactory', function ($http) {
        return {

            getUser: function (user) {
                return $http.get('/api/user', {
                    'email': user.email,
                    'name': user.name
                });
            },

            createUser: function (user) {
                let userData = {
                    name: user.name,
                    email: user.email
                };

                return $http({
                    method: 'PUT',
                    url: '/api/user',
                    data: userData
                });
            },

            updateBalance: function (user) {
                let userData = {
                    email: user.email,
                    balance: user.balance
                };


                return $http({
                    method: 'POST',
                    url: '/api/user',
                    data: userData
                });
            },

            getUserOrders: function (user) {
                let config = {
                    userData: {
                        email: user.email
                    }
                };
                return $http.get('/api/user/orders', config);
            },

            createNewOrder: function (order) {
                let orderData = {
                    email: order.userEmail,
                    menuid: order.menuid
                };

                return $http({
                    method: 'PUT',
                    url: '/api/orders',
                    data: orderData
                });
            },

            updateOrderStatus: function (order) {
                let orderData = {
                    id: order.id,
                    status: order.status
                };

                return $http({
                    method: 'POST',
                    url: '/api/user/orders',
                    data: orderData
                });
            },

            deleteOrder: function (order) {
                let orderData = {
                    id: order.id
                };

                return $http({
                    method: 'DELETE',
                    url: '/api/user/orders',
                    data: orderData
                });
            }
        }
    })