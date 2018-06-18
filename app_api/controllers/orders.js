const mongoose = require('mongoose');
const User = mongoose.model('User');
const Orders = mongoose.model('Orders');

const sendJSONResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
}

function randomId() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
  length = 16;
  var id = "";

  for (var i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}


module.exports.getOrders = function (req, res) {
  if(req.body && req.body.status) {
    Orders.find({'status': req.body.status}, (err, orders) => {
      if (err) {
        console.log(err);
        sendJSONResponse(res, 404, err);
        return;
      } else if (!orders) {
        sendJSONResponse(res, 404, {
          'message': 'Заказ не найден'
        })
      } else {
        res.send(orders);
      }
    })
  } else {
    Orders.find({}, (err, orders) => {
      if (err) {
        console.log(err);
        sendJSONResponse(res, 404, err);
        return;
      } else if (!orders) {
        sendJSONResponse(res, 404, {
          'message': 'Заказ не найден'
        })
      } else {
        res.send(orders);
      }
    })
  }
}

module.exports.getOrderByUser = function (req, res) {
  if (req.body && req.body.userData.email) {
    Orders.find({
      'emailUser': req.body.userData.email
    }, (err, orders) => {
      if (err) {
        console.log(err);
        sendJSONResponse(res, 404, err);
        return;
      } else if (!orders) {
        sendJSONResponse(res, 404, {
          'message': 'Заказ не найден'
        })
      } else {
        res.send(orders);
      }
    })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Не введены данные'
    })
  }
}

module.exports.changeStatus = function (req, res) {
  if (req.body && req.body.orderData.id && req.body.orderData.status) {
    Orders.findOne({
      'id': req.body.orderData.id
    }, (err, order) => {
      if (!order) {
        sendJSONResponse(res, 404, {
          'message': 'Заказ не найден'
        });
        return;
      } else if (err) {
        sendJSONResponse(res, 404, err);
        return;
      }
      order.status = req.body.orderData.status;
      order.save((err, order) => {
        if (err) {
          sendJSONResponse(res, 404, err);
        } else {
          res.send(order)
        }
      })
    })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Данные не введены'
    })
    return;
  }
}

module.exports.addOrder = function (req, res) {
  if (req.body && req.body.orderData.menuid && req.body.orderData.email) {
    const orderId = randomId();
    const newOrder = new Orders({
      'id': orderId,
      'idMenu': req.body.orderData.menuid,
      'emailUser': req.body.orderData.email,
      'status': 'Заказано'
    });
    newOrder.save((err, order) => {
      if (err) {
        sendJSONResponse(res, 404, err);
      } else {
        res.send(order);
      }
    })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Данные не введены'
    })
  }
}

module.exports.deleteOrder = function (req, res) {
  if (req.body && req.body.orderData.id) {
    Orders.findOne(req.body.orderData.id).remove(err => {
      if (err) {
        sendJSONResponse(res, 404, err)
      } else {
        return;
      }
    })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Даннные не введены'
    })
  }
}