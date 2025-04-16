const FoodWasteRequest = require('../models/FoodWasteRequest');



exports.createFoodWasteRequest = async (req, res) => {
    const foodrequestwasteData = req.body;
  
    try {
      const NewFoodWasteRequest = new FoodWasteRequest(foodrequestwasteData);
      await NewFoodWasteRequest.save();
      res.json({ message: 'Request created successfully' });
    } catch (error) {
      console.error('Error creating Request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  exports.getFoodWasteRequest = async (req, res) => {
    try {
      const foodWasteRequest = await FoodWasteRequest.find();
      res.json(foodWasteRequest);
    } catch (error) {
      console.error('Error fetching Food Request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
  