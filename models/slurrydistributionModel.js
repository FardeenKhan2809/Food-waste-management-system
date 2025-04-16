const mongoose = require('mongoose');

const slurryDistributionSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: { // Existing date field (automatically set on creation)
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: true,
  },
  submissionDate: { // New date field for manual entry
    type: Date,
    default: Date.now,
  },
});

const SlurryDistribution = mongoose.model('SlurryDistribution', slurryDistributionSchema);

module.exports = SlurryDistribution;