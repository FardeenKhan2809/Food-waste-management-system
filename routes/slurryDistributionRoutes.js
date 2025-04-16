// slurryDistributionRoutes.js
const express = require('express');
const router = express.Router();
const SlurryController = require('../controllers/slurryController');

router.get('/api/viewslurrydistributions', SlurryController.getSlurryDistributions);

router.get('/api//viewslurrydistributions/:id', SlurryController.getSlurryDistributionById);


// POST /api/slurrydistributions
router.post('/api/slurrydistributions', SlurryController.addSlurryDistribution);

// Route for fetching a single slurry request by ID
router.get('/api/fetchslurryRequests/:id', SlurryController.getSlurryRequestById);

router.put('/api/updateslurrydistributions/:id', SlurryController.updateSlurryDistribution);

router.delete('/api/deleteslurrydistributions/:id', SlurryController.deleteSlurryDistribution);

module.exports = router;