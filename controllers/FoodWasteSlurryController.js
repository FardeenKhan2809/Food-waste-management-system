// FoodWasteSlurryController.js

const FoodWasteSlurry = require('../models/FoodWasteSlurryModel');


exports.addFoodWasteData = async (req, res) => {
  try {
    const { quantity, date } = req.body;

    // Find the existing record for the given type and date (or create a new one if not found)
    const options = { upsert: true, new: true };
    const updatedData = await FoodWasteSlurry.findOneAndUpdate(
      { type: req.body.type, date }, // Match type and date
      { $inc: { quantity }, date }, // Increment existing quantity and set the date (overwrite if exists)
      options
    );

    if (updatedData) {
        res.json({ message: `${req.body.type} data updated successfully` });
    } else {
      // No record found, create a new one
      const newData = new FoodWasteSlurry({ type: req.body.type, quantity, date });
      await newData.save();
      res.json({ message: `${req.body.type} data added successfully` });
    }
  } catch (error) {
    console.error('Error adding/updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.addSlurryData = async (req, res) => {
  // This function remains the same as the previous combined response:
  try {
    const { quantity, date } = req.body;

    // Same logic using findOneAndUpdate with upsert: true for handling existing or new records
    const options = { upsert: true, new: true };
    const updatedSlurry = await FoodWasteSlurry.findOneAndUpdate(
      { type: 'slurry', date }, // Find record with type 'slurry' and matching date
      { $inc: { quantity }, date }, // Increment existing quantity and set the date
      options
    );

    if (updatedSlurry) {
      res.json({ message: 'Slurry data updated successfully' });
    } else {
      // No record found, create a new one
      const newSlurry = new FoodWasteSlurry({ type: 'slurry', quantity, date });
      await newSlurry.save();
      res.json({ message: 'Slurry data created successfully' });
    }
  } catch (error) {
    console.error('Error adding/updating slurry data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getFoodWasteSlurries = async (req, res) => {
  try {
    const foodWasteSlurries = await FoodWasteSlurry.find();
    res.json(foodWasteSlurries);
  } catch (error) {
    console.error('Error fetching food waste slurries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getFoodWasteSlurryById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodWasteSlurry = await FoodWasteSlurry.findById(id);
    res.json(foodWasteSlurry);
  } catch (error) {
    console.error('Error fetching food waste slurry by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateFoodWasteSlurry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFoodWasteSlurry = await FoodWasteSlurry.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedFoodWasteSlurry);
  } catch (error) {
    console.error('Error updating food waste slurry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteFoodWasteSlurry = async (req, res) => {
    try {
      const { id } = req.params;
      await FoodWasteSlurry.findByIdAndDelete(id);
      res.json({ message: 'Record deleted successfully' });
    } catch (error) {
      console.error('Error deleting food waste slurry:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };