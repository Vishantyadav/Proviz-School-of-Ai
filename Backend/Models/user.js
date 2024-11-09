const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  statement: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
