var express = require('express');

module.exports = exports = function (options) {
  var users = options.users;
  var router = express.Router();

  router.get('/user', function (req, res) {
  });

  router.put('/user', function (req, res) {
  });

  router.delete('/user', function (req, res) {
  });

  return router;
};
