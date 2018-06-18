const mongoose = require('mongoose');
const User = mongoose.model('User');


const sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.getUser = function(req, res) {
  if (req.body && req.body.email && req.body.name) {
    Users
      .findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
          sendJSONResponse(res, 404, {
            'message': 'Пользователь не найден'
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONResponse(res, 404, err);
          return;
        }
        res.send(user);
      })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Вы не ввели email'
    });
    return;
  }
};

module.exports.addUser = function(req, res) {
  if (req.body && req.body.userData.email && req.body.userData.name) {
    const user = new Users({ 'email': req.body.userData.email, 'name': req.body.userData.name });
    user.save(err => {
      if (err) {
        sendJSONResponse(res, 404, err)
        return;
      };
      res.send(user);
    })
  } else {
    sendJSONResponse(res, 404, {
      'message': 'Не введены данные'
    });
    return;
  }
}

module.exports.changeScoreUser = function(req, res) {
  if (req.body && req.body.userData.email) {
    Users
      .findOne({ email: req.body.userData.email }, (err, user) => {
        if (!user) {
          sendJSONResponse(res, 404, {
            'message': 'Пользователь не найден'
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONResponse(res, 404, err);
          return;
        }
        if (req.body.userData.balance) {
          user.balance = req.body.userData.balance;
          res.send(user);
        } else {
          user.balance += 100;
          res.send(user);
        }
      })

  } else {
    sendJSONResponse(res, 404, {
      'message': 'Ошибка id'
    });
    return;
  }
}