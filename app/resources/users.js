var UserSchema = require('../schemes/user');

module.exports = exports = function (options) {
  var db = options.db;
  var User = db.model('User', UserSchema);

  return {
    list: function (options, callback, context) {
      /*Trade.find({}, function (err, trades) {
        if (err) callback.call(context, err);

        callback.call(context, null, trades);
      });*/
    },

    get: function (options, callback, context) {
      var filter = {};

      if (options.id) filter.id = options.id;
      if (options.email) filter.email = options.email;
      if (options.password) filter.passwordHash = options.password;

      Trade.find(filter, function (error, trade) {
        if (error) callback.call(context, error);

        callback.call(context, null, trade);
      });
    },

    create: function () {
    },

    update: function () {
    },

    delete: function () {
    }
  };
};
