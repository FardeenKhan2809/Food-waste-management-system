const express = require('express');
const router = express.Router();
const foodWasteRequestController=require('../controllers/foodwasterequestController');




// Route to get food waste request by ID
//router.get('api/foodWasteRequest/:id', foodWasteRequestController.getFoodWasteRequestById);

// Route to create a new food waste request
router.post('/api/foodWasteRequest', foodWasteRequestController.createFoodWasteRequest);

router.get('/api/foodWasteRequests', foodWasteRequestController.getFoodWasteRequest);



module.exports = router;
