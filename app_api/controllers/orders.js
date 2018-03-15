const mongoose = require('mongoose');
const User = mongoose.model('User');
const Orders = mongoose.model('Orders');

const sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.getOrders = function(req, res) {
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

module.exports.getOrderByUser = function(req, res) {
  if (req.body && req.body.emailUser) {
    Orders.find({ 'emailUser': req.body.emailUser }, (err, orders) => {
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

module.exports.changeStatus = function(req, res) {
  if (req.body && req.body.orderId && req.body.orderStatus) {
    Orders.findById(req.body.orderId, (err, order) => {
      if (!order) {
        sendJSONResponse(res, 404, {
          'message': 'Заказ не найден'
        });
        return;
      } else if (err) {
        sendJSONResponse(res, 404, err);
        return;
      }
      order.status = req.body.orderStatus;
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

module.exports.addOrder = function(req, res) {
  if (req.body && req.body.idMenu && req.body.emailUser) {
    const newOrder = new Orders({ 'idMenu': req.body.idMenu, 'emailUser': req.body.emailUser, 'status': 'Заказано' });
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

module.exports.deleteOrder = function(req, res) {
  if (req.body && req.body.orderId) {
    Orders.findById(req.body.orderId).remove(err => {
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