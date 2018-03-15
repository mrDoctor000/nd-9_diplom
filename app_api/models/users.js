var mongoose = require('mongoose');

const userShema = new mongoose.Schema({
  email: String,
  name: String,
  score: { type: Number, 'default': 100 }
});

mongoose.model('User', userShema);

module.exports = userShema;