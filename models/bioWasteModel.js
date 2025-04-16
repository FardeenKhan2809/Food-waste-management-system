// bioWasteModel.js

const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const bioWasteSchema = new mongoose.Schema({
  biogasId: {
    type: String,
    unique: true,
  },
  biogasName: {
    type: String,
    required: true,
  },
  biogasAddress: {
    type: String,
    required: true,
  },
  biogasMobileNo: {
    type: Number, // Assuming it is a string, adjust as needed
    required: true,
  },
  biogasEmail: {
    type: String,
    required: true,
    unique: true,
    // Additional validation for email format can be added using a regex pattern
  },
  biogasSlurryLimit: {
    type: Number,
    required: true,
  },
});

bioWasteSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'BioWaste' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'BioWaste', lastId: 'BG00' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newbiogasId = 'BG' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.biogasId = newbiogasId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newbiogasId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const BioWaste = mongoose.model('BioWaste', bioWasteSchema);

module.exports = BioWaste;
