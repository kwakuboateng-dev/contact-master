const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: 'String',
    required: [true, "Please enter a name"],

  },
  phone: {
    type: 'String',
    required: [true, "Please enter phone number"],

  },
  address: {
    type: 'String',
    required: [false, "Please enter address"],

  },
  email: {
    type: 'String',
    required: [false, "Please enter address"],
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);