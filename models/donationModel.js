// donationModel.js

const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 


const donationSchema = new mongoose.Schema({
  donationId: {
    type: String,
    unique: true,
  },
  donationType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  donorName: {
    type: String,
    required: true,
  },
  donorMobileNo: {
    type: String,
    required: true,
  },
  donorEmail: {
    type: String,
    required: true,
  },
  cardNumber:{
    type:String,
    required:true
  },
  expiry:{
    type:String,
    required:true,
  },
  cvv:{
    type:String,
    required:true
  },
  
  donationAmount: {
    type: Number,
    required: true,
  },
});

donationSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Donation' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Donation', lastId: 'D000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newdonationId = 'D' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.donationId = newdonationId;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newdonationId;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});


const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
