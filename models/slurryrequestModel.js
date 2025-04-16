const mongoose = require('mongoose');

// Create a schema for the slurry request
const slurryRequestSchema = new mongoose.Schema({
  farmerName: String,
  mobileNo: String,
  address: String,
  date: Date,
  status: {
    type: String,
    default: 'pending'
  }
});

const SlurryRequest = mongoose.model('SlurryRequest', slurryRequestSchema);

module.exports = SlurryRequest;