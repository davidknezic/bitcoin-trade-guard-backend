var express = require('express');

module.exports = exports = function (options) {
  var users = options.users;
  var router = express.Router();

  router.post('/users', function (req, res) {
    res.json(200, 'OK');
  });

  return router;
};
