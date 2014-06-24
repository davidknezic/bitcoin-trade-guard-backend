module.exports = exports = function () {
  return {
    subscriptions: {},

    trigger: function (name, ctx, args) {
      var s = this.subscriptions[name];

      if (typeof s === 'function') {
        s.apply(ctx, args);
      }
    },

    on: function (name, cb) {
      this.subscriptions[name] = cb;
    }
  };
};
