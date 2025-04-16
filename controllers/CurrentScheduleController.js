const CurrentScheduleModel = require('../models/CurrentScheduleModel');
const RequestFWRequestModel = require('../models/RegularFWRequestModel');
const OccasionalFWRequestModel = require('../models/OccasionalFWRequestModel');



/*
exports.createcurrentSchedule = async (req, res) => {
    try {
      const newCSchedule = new CurrentScheduleModel(req.body);
      await newCSchedule.save();
      res.json({ message: 'Current Schedule Made successfully' });
    } catch (error) {
      console.error('Error creating CSchedule:', error);
      res.status(500).json({ message: 'Current Schedule failed. Please try again.' });
    }
  };
  */



// Controller to handle duplication of data and storing it in the currentschedulemodel
exports.addToCurrentSchedule = async (req, res) => {
  try {
      // Assuming the request body contains the data to be duplicated and stored
      const requestData = req.body;

            
     // Set the status to "Approved"
     requestData.status = "Approved";

     // Update status to "Approved" in both Request and Occasional collections (assuming similar models and controllers)
     await RequestFWRequestModel.findOneAndUpdate(
         { _id: requestData._id },
         { $set: { status: "Approved" } }
     );
     await OccasionalFWRequestModel.findOneAndUpdate(
         { _id: requestData._id },
         { $set: { status: "Approved" } }
     );  

      
      // Create a new document in the CurrentScheduleModel collection
      const duplicatedData = await CurrentScheduleModel.create(requestData);

      // Send a success response with the duplicated data
      res.status(201).json({ success: true, data: duplicatedData, message: 'Data duplicated and stored successfully' });
  } catch (error) {
      // If an error occurs, send an error response
      console.error('Error duplicating and storing data:', error);
      res.status(500).json({ success: false, error: 'Failed to duplicate and store data' });
  }
};





//fetch according to yesterday date
exports.ScheduleMain = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const RequestFWRequests = await CurrentScheduleModel.find({ date: formattedDate });
    res.json(RequestFWRequests);
} catch (error) {
    console.error('Error fetching Schedule:', error);
    res.status(500).json({ error: 'Failed to fetch Request' });
}
};


