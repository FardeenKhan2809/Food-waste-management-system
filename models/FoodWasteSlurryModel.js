const mongoose = require('mongoose');

// Define the schema for FoodWasteSlurry
const foodWasteSlurrySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create and export the FoodWasteSlurry model
module.exports = mongoose.model('FoodWasteSlurry', foodWasteSlurrySchema);