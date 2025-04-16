// routes/clerkRoutes.js (unchanged)
const express = require('express');
const router = express.Router();
const clerkController = require('../controllers/clerkController');

router.post('/api/createClerk', clerkController.registerUser);

router.get('/api/Clerks', clerkController.getClerks);

router.put('/api/clerks/:id', clerkController.updateClerk);


// Delete clerk
router.delete('/api/clerks/:id', clerkController.deleteClerk);


module.exports = router;