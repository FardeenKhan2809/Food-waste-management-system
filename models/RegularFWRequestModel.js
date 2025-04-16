const mongoose = require('mongoose');

const LastRequestId = require('./LastRequestId'); // Import the LastRequestId schema

const RegularFWRequestModel = new mongoose.Schema({
  organisationName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  requesterName: {
    type: String,
    required: true,
  },
  approxQuantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending', // Default status set to "Pending"
  },

  requestId: {
    type: String,
    
    unique: true,
  },
});

// Pre-save hook to auto-generate requestId
RegularFWRequestModel.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for RegularFWRequestModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'RegularFWRequest' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'RegularFWRequest', lastId: 'R001' });
      await lastRequestIdDoc.save();
    }

    // Generate new requestId based on lastId
    const newRequestId = 'R' + String(Number(lastRequestIdDoc.lastId.slice(1)) + 1).padStart(3, '0');

    // Set the requestId for the current document
    this.requestId = newRequestId;

    // Update the lastId for RegularFWRequestModel
    lastRequestIdDoc.lastId = newRequestId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('RegularFWRequestModel', RegularFWRequestModel);
