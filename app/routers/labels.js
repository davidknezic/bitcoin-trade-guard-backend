var express = require('express');

module.exports = exports = function (options) {
  var labels = options.labels;
  var router = express.Router();

  router.get('/labels', function (req, res) {
  });

  router.get('/labels/:id', function (req, res) {
  });

  router.post('/labels', function (req, res) {
  });

  router.put('/labels/:id', function (req, res) {
  });

  router.delete('/labels/:id', function (req, res) {
  });

  return router;
};
