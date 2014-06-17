var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LabelSchema = new Schema({
  text: String,
  color: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Account' }
});

module.exports = exports = mongoose.model('Label', LabelSchema);
