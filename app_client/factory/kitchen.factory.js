angular.module('DroneCafeApp')
    .factory('kitchenFactory', function () {
        return {

            getDishes: function (dishStatus) {
                let config = {
                    params: {
                        status: dishStatus
                    }
                };
                return $http.get('/api/orders', config);
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

        }

    });