var express = require('express');

module.exports = exports = function (options) {
  var BasicAuth = require('./middleware/auth/basic');

  var TradesRouter = require('./routers/trades');
  var UserRouter = require('./routers/user');
  var UsersRouter = require('./routers/users');
  var LabelsRouter = require('./routers/labels');

  var app = express();

  app.use(BasicAuth({ users: options.users }));

  app.use(UserRouter({ users: options.users }));
  app.use(UsersRouter({ users: options.users }));
  app.use(TradesRouter({ trades: options.trades }));
  app.use(LabelsRouter({ labels: options.labels }));

  app.all('*', function (req, res, next) {
    next(new Error('not_found'));
  });

  app.use(function(err, req, res, next) {
    res.send(500, { error: 'something' });
  });

  return app;
};
