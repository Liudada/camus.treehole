'use strict';

require('./config/init')();
var server = require('./api');
var db = require('./config/db');

db.connect(function (err) {
  if (!err) {
    server.listen(process.env.PORT || 9001, function () {
      console.log('API server listening');
    });
  } else {
    throw err;
  }
});
