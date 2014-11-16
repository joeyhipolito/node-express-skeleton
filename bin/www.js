#!/usr/bin/env node

var config = require('app/config');
var app    = require('app/app');
var debug  = require('debug')(config.app.name);

var server = app.listen(config.server.port, config.server.ip, function (err) {
  debug('Server listening on port ' + server.address().port);
});
