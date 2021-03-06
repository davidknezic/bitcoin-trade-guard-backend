var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = exports = new Schema({
  executionOn: Date,
  isBtcSell: Boolean,
  isBtcBuy: Boolean,
  price: String,
  amount: String,
  fee: String,
  isIgnored: Boolean,
  isDeleted: Boolean,
  serviceName: String,
  serviceIdentifier: Object,
  labels: [{ type: Schema.Types.ObjectId, ref: 'Label' }],
  owner: { type: Schema.Types.ObjectId, ref: 'Account' }
});
