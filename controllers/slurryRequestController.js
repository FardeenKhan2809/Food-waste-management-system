// slurryrequestController.js

const SlurryRequest = require('../models/slurryrequestModel');

// Get all slurry requests
exports.getAllSlurryRequests = async (req, res) => {
    try {
        const slurryRequests = await SlurryRequest.find({}).select('farmerName mobileNo address date status');
        res.status(200).json(slurryRequests);
    } catch (error) {
        console.error('Error fetching slurry requests:', error);
        res.status(500).json({ message: 'Failed to fetch slurry requests. Please try again.' });
    }
};
  
  // Get a single slurry request by ID
  exports.getSlurryRequestById = async (req, res) => {
    try {
      const slurryRequest = await SlurryRequest.findById(req.params.id, '-status'); // Exclude 'status' field
      if (!slurryRequest) {
        return res.status(404).json({ message: 'Slurry request not found.' });
      }
      res.status(200).json(slurryRequest);
    } catch (error) {
      console.error('Error fetching slurry request by ID:', error);
      res.status(500).json({ message: 'Failed to fetch slurry request. Please try again.' });
    }
  };
  

// Update slurry request
exports.updateSlurryRequest = async (req, res) => {
    try {
        const { farmerName, phoneNumber, address, date } = req.body;

        // Find and update the slurry request
        const updatedSlurryRequest = await SlurryRequest.findByIdAndUpdate(
            req.params.id,
            { farmerName, phoneNumber, address, date },
            { new: true }
        );

        if (!updatedSlurryRequest) {
            return res.status(404).json({ message: 'Slurry request not found.' });
        }

        res.status(200).json({ message: 'Slurry request updated successfully!' });
    } catch (error) {
        console.error('Error updating slurry request:', error);
        res.status(500).json({ message: 'Failed to update slurry request. Please try again.' });
    }
};

// Delete slurry request
exports.deleteSlurryRequest = async (req, res) => {
    try {
        const deletedSlurryRequest = await SlurryRequest.findByIdAndDelete(req.params.id);

        if (!deletedSlurryRequest) {
            return res.status(404).json({ message: 'Slurry request not found.' });
        }

        res.status(200).json({ message: 'Slurry request deleted successfully!' });
    } catch (error) {
        console.error('Error deleting slurry request:', error);
        res.status(500).json({ message: 'Failed to delete slurry request. Please try again.' });
    }
};

// Controller function to handle the creation of a new slurry request
exports.createRequest = async (req, res) => {
    try {
        const { farmerName, mobileNo, address, date } = req.body;

        // Check if the user has made a request within the last 15 days
        const lastRequest = await SlurryRequest.findOne({ farmerName, mobileNo }).sort({ date: -1 });

        if (lastRequest) {
            const currentDate = new Date();
            const lastRequestDate = new Date(lastRequest.date);
            const daysSinceLastRequest = Math.floor((currentDate - lastRequestDate) / (1000 * 60 * 60 * 24));

            if (daysSinceLastRequest < 15) {
                // Calculate the date when the next request can be made
                const nextEligibleDate = new Date(lastRequestDate.setDate(lastRequestDate.getDate() + 15));
                return res.status(400).json({ message: `You can make a request only once every 15 days. Next eligible date: ${nextEligibleDate.toDateString()}` });
            }
        }

        // If no recent request or more than 15 days have passed, proceed with creating a new request
        const newRequest = new SlurryRequest({ farmerName, mobileNo, address, date, status: 'pending' });
        await newRequest.save();

        // Send success response
        res.status(200).json({ message: 'Request Registered Successfully' });

    } catch (error) {
        console.error('Error creating Request:', error);
        res.status(500).json({ message: 'Registration failed. Please try again.' });
    }
};