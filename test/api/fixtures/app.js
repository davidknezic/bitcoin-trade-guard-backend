var traverse = require('traverse');

function delegateToEvent(eventName, observable) {
  return function () {
    observable.trigger(eventName, this, arguments);
  };
};

function delegateToEvents(obj, observable) {
  return traverse(obj).map(function (x) {
    if (typeof x === 'string') {
      this.update(delegateToEvent(x, observable));
    }
  });
};

module.exports = exports = function (observable) {
  var Application = require('../../../app/app');

  var app = Application(delegateToEvents({
    users: {
      list: 'users:list',
      get: 'users:get',
      create: 'users:create',
      update: 'users:update',
      delete: 'users:delete'
    },
    trades: {
      list: 'trades:list',
      get: 'trades:get',
      create: 'trades:create',
      update: 'trades:update',
      delete: 'trades:delete'
    },
    labels: {
      list: 'labels:list',
      get: 'labels:get',
      create: 'labels:create',
      update: 'labels:update',
      delete: 'labels:delete'
    }
  }, observable));

  return app;
};
