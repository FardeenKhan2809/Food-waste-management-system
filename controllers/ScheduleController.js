const ScheduleModel = require('../models/ScheduleModel');
const OccasionalFWRequestModel=require('../models/OccasionalFWRequestModel');
const RegularFWRequestModel=require('../models/RegularFWRequestModel');




// Assigning createSchedule to exports
exports.createSchedule = async (req, res) => {
  try {
    const newSchedule = new ScheduleModel(req.body);
    await newSchedule.save();
    res.json({ message: 'Schedule Made successfully' });
  } catch (error) {
    console.error('Error creating source:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};


//geting total request according to date

// Controller function to count total requests
exports.getTotalRequestCount = async (req, res) => {
  try {
    // Calculate the date for yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // Get yesterday's date

    // Fetch occasional and regular requests from the database
    const occasionalRequests = await OccasionalFWRequestModel.find({ date: { $gte: yesterday } });
    const regularRequests = await RegularFWRequestModel.find({ date: { $gte: yesterday } });

    // Calculate the total count
    const totalCount = occasionalRequests.length + regularRequests.length;

    // Send the total count as a response
    res.json({ totalCount });
  } catch (error) {
    console.error('Error fetching total request count:', error);
    res.status(500).json({ error: 'Failed to fetch total request count' });
  }
};