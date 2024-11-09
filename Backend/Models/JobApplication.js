const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  statement: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'applied', // default status when an application is created
  },
}, {
  timestamps: true,  // automatically adds createdAt and updatedAt
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
