var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = exports = new Schema({
  email: String,
  passwordHash: String,
  emailConfirmationCode: String,
  emailConfirmed: Date,
  createdOn: Date
});
