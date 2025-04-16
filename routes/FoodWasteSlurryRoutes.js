// routes/FoodWasteSlurryRoutes.js

const express = require('express');
const router = express.Router();
const FoodWasteSlurryController = require('../controllers/FoodWasteSlurryController');

// Route for adding food waste data
router.post('/foodWaste', FoodWasteSlurryController.addFoodWasteData);

// Route for adding slurry data
router.post('/slurry', FoodWasteSlurryController.addSlurryData);

// Get all food waste slurries
router.get('/foodwasteslurries', FoodWasteSlurryController.getFoodWasteSlurries);

// Get a specific food waste slurry by ID
router.get('/foodwasteslurries/:id', FoodWasteSlurryController.getFoodWasteSlurryById);

// Update a food waste slurry by ID
router.put('/foodwasteslurries/:id', FoodWasteSlurryController.updateFoodWasteSlurry);

// Delete a food waste slurry by ID
router.delete('/foodwasteslurries/:id', FoodWasteSlurryController.deleteFoodWasteSlurry);

module.exports = router;