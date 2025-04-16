// farmersModel.js

const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  farmerId: {
    type: String,
    required: true,
    unique: true,
  },
  farmerName: {
    type: String,
    required: true,
  },
  farmerMobileNo: {
    type: Number, // Assuming it is a string, adjust as needed
    required: true,
  },
  farmerEmail: {
    type: String,
    required: true,
    unique: true,
    // Additional validation for email format can be added using a regex pattern
  },
  farmerAddress: {
    type: String,
    required: true,
  },
  farmerUsername: {
    type: String,
    required: true,
    unique: true,
  },
  farmerPassword: {
    type: String,
    required: true,
  },
  farmerSecurityQuestion: {
    type: String,
    required: true,
  },
  farmerAnswer: {
    type: String,
    required: true,
  },
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
