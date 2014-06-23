var express = require('express');

module.exports = exports = function (options) {
  var trades = options.trades;
  var router = express.Router();

  router.get('/trades', function (req, res) {
    var options = {};

    /*req.query.page
    req.query.order
    req.query.direction*/

    trades.list(options, function (err, trades) {
      if (err) throw new Error('WOWOWO');

      res.json(200, trades);
    });
  });

  router.get('/trades/:id', function (req, res) {
    var options = {};
    options.id = req.get('id');

    trades.get(options, function (err, trade) {
      if (err) throw new Error('WOWOWO');

      res.json(200, trade);
    });
  });

  router.post('/trades', function (req, res) {
    /*var trade = new Trade(req);

    trade.save(function (error) {
      if (error) return;
    });*/
  });

  router.put('/trades/:id', function (req, res) {
  });

  router.delete('/trades/:id', function (req, res) {
  });

  return router;
};
