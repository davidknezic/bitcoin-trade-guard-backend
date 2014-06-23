var express = require('express');

module.exports = exports = function (options) {
  var BasicAuth = require('./middleware/auth/basic');

  var AccountRouter = require('./routers/account');
  var TradesRouter = require('./routers/trades');

  var accountsRouter = require('./routers/accounts');
  var labelsRouter = require('./routers/labels');

  var app = express();

  app.use(BasicAuth({ users: options.users }));

  //app.use(AccountRouter({}));
  app.use(TradesRouter({ trades: options.trades }));

  //app.use(accountsRouter);
  //app.use(labelsRouter);

  app.all('*', function (req, res, next) {
    next(new Error('not_found'));
  });

  app.use(function(err, req, res, next) {
    res.send(500, { error: 'something' });
  });

  return app;
};
