const mongoose = require('mongoose');

const FoodWasteRequestSchema = new mongoose.Schema({
  requestId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  requesterName: { type: String, required: true },
  approxQuantity: { type: Number, required: true },
  sourceId: { type: String, required: true },
    name: { type: String },
    mobileNo: { type: String },
    address: { type: String },
  
});

module.exports = mongoose.model('FoodWasteRequest', FoodWasteRequestSchema);
