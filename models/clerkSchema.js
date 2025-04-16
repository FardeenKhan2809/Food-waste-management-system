// clerkSchema.js
const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 

const clerkSchema = new mongoose.Schema({
  cid: {
    type: String,
    
    unique: true, // Assuming you want 'id' to be unique
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
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
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  securityQuestion: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});


clerkSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Clerk' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Clerk', lastId: 'C000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newcid = 'C' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.cid = newcid;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newcid;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const Clerk = mongoose.model('Clerk', clerkSchema);

module.exports = Clerk;
