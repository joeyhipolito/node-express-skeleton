#!/usr/bin/env node

var express = require('express');
var logger  = require('morgan');
var app     = express();
var router  = express.Router();

app.use(logger('dev'));

[
  'app/home/routes'
].forEach(function (routePath) {
  require(routePath)(router);
});

app.use('/', router);

module.exports = app;
