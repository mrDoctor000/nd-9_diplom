const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./app_api/models/db');

const routeApi = require('./app_api/routes/index')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routeApi);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;