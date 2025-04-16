const RegularFWRequestModel = require('../models/RegularFWRequestModel');

exports.createFWRegularRequest = async (req, res) => {
  try {
    
    
    const newFWRequest = new RegularFWRequestModel(req.body);
    await newFWRequest.save();
    res.json({ message: 'Food Waste Request registered successfully' });
  } catch (error) {
    console.error('Error creating FWRequest:', error);
    res.status(500).json({ message: 'Food Waste Request failed. Please try again.' });
  }
};


exports.getRegularFW = async (req, res) => {
  try {
    const RegularFW = await RegularFWRequestModel.find();
    res.json(RegularFW);
  } catch (error) {
    console.error('Error fetching RegularFW:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateRegularFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const RegularFWRequest = await RegularFWRequestModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!RegularFWRequest) {
      return res.status(404).json({ message: 'RegularFWRequest not found' });
    }

    res.status(200).json(RegularFWRequest);
  } catch (error) {
    console.error('Error updating RegularFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Delete registration
exports.deleteRegularFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const RegularFWRequest = await RegularFWRequestModel.findByIdAndDelete(id);

    if (!RegularFWRequest) {
      return res.status(404).json({ message: 'RegularFWRequest not found' });
    }

    res.status(200).json({ message: 'RegularFWRequest deleted successfully' });
  } catch (error) {
    console.error('Error deleting RegularFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



//fetch according to yesterday date
exports.ScheduleRegular = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const RegularFWRequests = await RegularFWRequestModel.find({status:'Pending'});
    res.json(RegularFWRequests);
} catch (error) {
    console.error('Error fetching Regular:', error);
    res.status(500).json({ error: 'Failed to fetch Regular' });
}
};






