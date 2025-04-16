// slurryrequestRoutes.js
const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

// Route for creating a new slurry request
router.post('/slurryRequest', SlurryRequestController.createRequest);

// Route for fetching all slurry requests
router.get('/slurryRequests', SlurryRequestController.getAllSlurryRequests);

// Route for fetching a single slurry request by ID
router.get('/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

// Route for updating a single slurry request by ID
router.put('/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

// Route for deleting a single slurry request by ID
router.delete('/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);

module.exports = router;