// adminSchema.js
const mongoose = require('mongoose');
const LastRequestId = require('./LastRequestId'); 

const adminSchema = new mongoose.Schema({
  aid: {
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


adminSchema.pre('save', async function (next) {
  try {
    // Fetch the lastRequestId document for YourModel
    let lastRequestIdDoc = await LastRequestId.findOne({ collectionName: 'Admin' });

    // If no document found, create a new one with initial lastId
    if (!lastRequestIdDoc) {
      lastRequestIdDoc = new LastRequestId({ collectionName: 'Admin', lastId: 'A000' });
      await lastRequestIdDoc.save();
    }

    // Generate new routeId based on lastId
    const lastIdNumber = parseInt(lastRequestIdDoc.lastId.slice(2)); // Extract the number part
    const newRouteIdNumber = lastIdNumber + 1;
    const newaid = 'A' + String(newRouteIdNumber).padStart(3, '0');

    // Set the routeId for the current document
    this.aid = newaid;

    // Update the lastId for YourModel
    lastRequestIdDoc.lastId = newaid;
    await lastRequestIdDoc.save();

    next();
  } catch (error) {
    next(error);
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
