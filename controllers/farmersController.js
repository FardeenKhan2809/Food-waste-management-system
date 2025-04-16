// controllers/farmersController.js

const Farmer = require('../models/farmersModel');


// Controller to create a new farmer
exports.createFarmer = async (req, res) => {
  const farmerData = req.body;

  try {
    const newFarmer = new Farmer(farmerData);
    await newFarmer.save();
    res.json({ message: 'Farmer created successfully' });
  } catch (error) {
    console.error('Error creating farmer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateFarmer = async (req, res) => {
  const { id } = req.params;

  try {
    const farmer = await Farmer.findByIdAndUpdate(id, req.body, { new: true });

    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    res.status(200).json(farmer);
  } catch (error) {
    console.error('Error updating Farmer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteFarmer = async (req, res) => {
  const { id } = req.params;

  try {
    const farmer = await Farmer.findByIdAndDelete(id);

    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    res.status(200).json({ message: 'Farmer deleted successfully' });
  } catch (error) {
    console.error('Error deleting Farmer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




exports.getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.json(farmers);
  } catch (error) {
    console.error('Error fetching Farmers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};