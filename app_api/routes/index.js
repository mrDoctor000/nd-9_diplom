var express = require('express');
var router = express.Router();

const ctrlUser = require('../controllers/user');
const ctrlOrders = require('../controllers/orders');

router.get('/user', ctrlUser.getUser);
router.post('/user', ctrlUser.changeScoreUser);
router.put('/user', ctrlUser.addUser);
router.get('/orders', ctrlOrders.getOrders);
router.get('/user/orders', ctrlOrders.getOrderByUser)
router.post('/user/orders', ctrlOrders.changeStatus);
router.put('/user/orders', ctrlOrders.addOrder);
router.delete('/user/orders', ctrlOrders.deleteOrder);

module.exports = router;