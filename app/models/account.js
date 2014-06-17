var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  email: String,
  passwordHash: String,
  emailConfirmationCode: String,
  emailConfirmed: Date,
  createdOn: Date
});

module.exports = exports = mongoose.model('Account', AccountSchema);
