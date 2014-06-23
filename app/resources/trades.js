var TradeSchema = require('../schemes/trade');

module.exports = exports = function (options) {
  var db = options.db;
  var Trade = db.model('Trade', TradeSchema);

  return {
    list: function (options, callback, context) {
      Trade.find({}, function (err, trades) {
        if (err) callback.call(context, err);

        callback.call(context, null, trades);
      });
    },

    get: function (options, callback, context) {
      Trade.find(options.id, function (err, trade) {
        if (err) callback.call(context, err);

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
