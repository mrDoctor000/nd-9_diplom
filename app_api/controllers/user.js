const mongoose = require('mongoose');
const User = mongoose.model('User');


const sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.getUser = function(req, res) {
  if (req.body && req.body.email) {
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
  if (req.body && req.body.email && req.body.name) {
    const user = new Users({ 'email': req.body.email, 'name': req.body.name });
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
  if (req.body && req.body.userid) {
    Users
      .findById(req.body.userid, (err, user) => {
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
        if (req.body.userscore) {
          user.score += req.body.userscore;
          res.send(user);
        } else {
          user.score += 100;
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