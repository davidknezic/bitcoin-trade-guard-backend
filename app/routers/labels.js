var express = require('express');

module.exports = exports = function (options) {
  var labels = options.labels;
  var router = express.Router();

  router.get('/labels', function (req, res) {
    res.json(200, 'OK');
  });

  router.get('/labels/:id', function (req, res) {
    res.json(200, 'OK');
  });

  router.post('/labels', function (req, res) {
    res.json(200, 'OK');
  });

  router.put('/labels/:id', function (req, res) {
    res.json(200, 'OK');
  });

  router.delete('/labels/:id', function (req, res) {
    res.json(200, 'OK');
  });

  return router;
};
