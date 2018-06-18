const mongoose = require('mongoose');

const ordersShema = new mongoose.Schema({
  id: String,
  idMenu: Number,
  emailUser: String,
  status: String
});

mongoose.model('Orders', ordersShema);