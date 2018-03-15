const mongoose = require('mongoose');

const ordersShema = new mongoose.Schema({
  idMenu: Number,
  emailUser: String,
  status: String
});

mongoose.model('Orders', ordersShema);