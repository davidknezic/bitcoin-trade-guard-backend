var UserSchema = require('../schemes/user');

module.exports = exports = function (options) {
  var db = options.db;
  var User = db.model('User', UserSchema);

  return {
    list: function (options, callback, context) {
      var filter = {};

      if (options.user_id) {
        filter.owner = {};
        filter.owner.id = options.user_id;
      }

      User.find(filter, function (err, users) {
        if (err) callback.call(context, err);

        callback.call(context, null, users);
      });
    },

    get: function (options, callback, context) {
      var filter = {};

      if (options.id) filter.id = options.id;
      if (options.email) filter.email = options.email;
      if (options.password) filter.passwordHash = options.password;

      User.find(filter, function (error, users) {
        if (error) callback.call(context, error);

        if (!users || users.length < 1) {
          return callback.call(context, null, null);
        }

        callback.call(context, null, users[0]);
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
