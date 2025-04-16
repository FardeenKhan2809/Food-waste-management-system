//slurryController.js

const mongoose = require('mongoose'); // Import Mongoose for database interactions

const SlurryRequest = require('../models/slurryrequestModel');
const SlurryDistribution = require('../models/slurrydistributionModel');
const FoodWasteSlurry = require('../models/FoodWasteSlurryModel');

// Function to get all slurry distributions
exports.getSlurryDistributions = async (req, res) => {
  try {
    const slurryDistributions = await SlurryDistribution.find(); // Use Mongoose to find all slurry distributions
    res.status(200).json(slurryDistributions);
  } catch (error) {
    console.error('Error fetching slurry distributions:', error);
    res.status(500).json({ message: 'Failed to fetch slurry distributions. Please try again.' });
  }
};

// Function to get a slurry request by ID
exports.getSlurryRequestById = async (req, res) => {
  try {
    const slurryRequest = await SlurryRequest.findById(req.params.id); // Use Mongoose to find by ID
    if (!slurryRequest) {
      return res.status(404).json({ message: 'Slurry request not found.' });
    }

    // Extract required fields
    const { farmerName, phoneNumber, address, date } = slurryRequest;
    const responseData = { farmerName, phoneNumber, address, date };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching slurry request by ID:', error);
    res.status(500).json({ message: 'Failed to fetch slurry request. Please try again.' });
  }
};

exports.getSlurryDistributionById = async (req, res) => {
    try {
      const { id } = req.params; // Get ID from request parameters
  
      // Validate ID format (optional, depending on your Mongoose schema)
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid slurry distribution ID.' });
      }
  
      const slurryDistribution = await SlurryDistribution.findById(id); // Use Mongoose to find by ID
  
      if (!slurryDistribution) {
        return res.status(404).json({ message: 'Slurry distribution not found.' });
      }
  
      res.status(200).json(slurryDistribution);
    } catch (error) {
      console.error('Error fetching slurry distribution by ID:', error);
      res.status(500).json({ message: 'Failed to fetch slurry distribution. Please try again.' });
    }
};
  

// Function to add a new slurry distribution
exports.addSlurryDistribution = async (req, res) => {
  try {
    console.log('Received request body:', req.body);

    const { farmerName, mobileNo, address, date, quantity } = req.body;

    // Check for missing fields
    if (!farmerName || !mobileNo || !address || !date || !quantity) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // Check if quantity is insufficient
    if (quantity <= 5) {
      return res.status(400).json({ message: 'Slurry quantity unavailable' });
    }

    // Update slurry request status (if applicable)
    const updateResult = await SlurryRequest.findOneAndUpdate(
      { farmerName, mobileNo },
      { $set: { status: 'approved' }, $inc: { version: 1 } },
      { new: true }
    );

    let statusUpdated = false;
    let alertMessage = 'Slurry distribution added successfully!';

    if (updateResult) {
      statusUpdated = true;
      alertMessage += ' Status has been changed to approved.';
    } else {
      alertMessage += ' Slurry request not found for update.';
    }

    // Logic for FoodWasteSlurry Deduction
    const latestSlurryRecord = await FoodWasteSlurry.findOne({ type: 'slurry' }).sort({ date: -1 });

    if (latestSlurryRecord) {
      const requestedQuantity = quantity;
      let remainingQuantity = latestSlurryRecord.quantity - requestedQuantity;

      if (remainingQuantity < 0) {
        remainingQuantity = 0;
      }

      latestSlurryRecord.quantity = remainingQuantity;
      await latestSlurryRecord.save();

      const deductedQuantity = remainingQuantity > 0 ? requestedQuantity : remainingQuantity;
      alertMessage += `\nRequested ${requestedQuantity} units, deducted ${deductedQuantity} units. Remaining quantity: ${remainingQuantity}`;
    } else {
      return res.status(404).json({ message: 'No slurry records found of type "slurry".' });
    }

    const newSlurryDistribution = new SlurryDistribution({
      farmerName,
      mobileNo,
      address,
      date,
      quantity,
      submissionDate: new Date()
    });

    await newSlurryDistribution.save();

    console.log(alertMessage);

    res.status(200).json({ message: alertMessage, statusUpdated });
  } catch (error) {
    console.error('Error adding slurry distribution:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    } else {
      return res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
  }
};



// Function to update an existing slurry distribution
exports.updateSlurryDistribution = async (req, res) => {
    try {
      const { id } = req.params; // Get ID from request parameters
      const updates = req.body; // Get updated data from request body
  
      // Validate ID format (optional, depending on your Mongoose schema)
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid slurry distribution ID.' });
      }
  
      const allowedUpdates = ['farmerName', 'mobileNo', 'address', 'quantity']; // Allowed fields for update
      const updateObject = Object.keys(updates).reduce((acc, update) => {
        if (allowedUpdates.includes(update)) {
          acc[update] = updates[update];
        }
        return acc;
      }, {});
  
      // Check if any updates are provided
      if (Object.keys(updateObject).length === 0) {
        return res.status(400).json({ message: 'No updates provided.' });
      }
  
      const updatedSlurryDistribution = await SlurryDistribution.findByIdAndUpdate(
        id,
        updateObject,
        { new: true } // Return the updated document
      );
  
      if (!updatedSlurryDistribution) {
        return res.status(404).json({ message: 'Slurry distribution not found.' });
      }
  
      res.status(200).json(updatedSlurryDistribution);
    } catch (error) {
      console.error('Error updating slurry distribution:', error);
      // Handle specific errors (optional)
      if (error.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid slurry distribution ID.' });
      } else if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ message: messages.join(', ') });
      } else {
        // Handle other errors
        return res.status(500).json({ message: 'Internal server error. Please try again later.' });
      }
    }
  };

  exports.deleteSlurryDistribution = async (req, res) => {
    try {
      const { id } = req.params; // Get ID from request parameters
  
      // Validate ID format (optional, depending on your Mongoose schema)
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid slurry distribution ID.' });
      }
  
      const deletedSlurryDistribution = await SlurryDistribution.findByIdAndDelete(id);
  
      if (!deletedSlurryDistribution) {
        return res.status(404).json({ message: 'Slurry distribution not found.' });
      }
  
      res.status(200).json({ message: 'Slurry distribution deleted successfully.' });
    } catch (error) {
      console.error('Error deleting slurry distribution:', error);
      // Handle specific errors (optional)
      if (error.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid slurry distribution ID.' });
      } else {
        // Handle other errors
        return res.status(500).json({ message: 'Internal server error. Please try again later.' });
      }
    }
  };