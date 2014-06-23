var LabelSchema = require('../schemes/label');

module.exports = exports = function (options) {
  var db = options.db;
  var Label = db.model('Label', LabelSchema);

  return {
    list: function (options, callback, context) {
    },

    get: function (options, callback, context) {
    },

    create: function () {
    },

    update: function () {
    },

    delete: function () {
    }
  };
};
