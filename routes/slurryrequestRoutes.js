const express = require('express');
const router = express.Router();
const SlurryRequestController = require('../controllers/slurryRequestController');

// Route for creating a new slurry request
router.post('/api/slurryRequest', SlurryRequestController.createRequest);

// Route for fetching all slurry requests
router.get('/api/slurryRequests', SlurryRequestController.getAllSlurryRequests);

// Route for fetching a single slurry request by ID
router.get('/api/slurryRequests/:id', SlurryRequestController.getSlurryRequestById);

// Route for updating a single slurry request by ID
router.put('/api/slurryRequests/:id', SlurryRequestController.updateSlurryRequest);

// Route for deleting a single slurry request by ID
router.delete('/api/slurryRequests/:id', SlurryRequestController.deleteSlurryRequest);

module.exports = router;