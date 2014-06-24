var express = require('express');

module.exports = exports = function (options) {
  var users = options.users;
  var router = express.Router();

  router.get('/user', function (req, res) {
    res.json(200, 'OK');
  });

  router.put('/user', function (req, res) {
    res.json(200, 'OK');
  });

  router.delete('/user', function (req, res) {
    res.json(200, 'OK');
  });

  return router;
};
