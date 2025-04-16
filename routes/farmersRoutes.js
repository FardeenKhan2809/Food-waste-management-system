// routes/farmersRoutes.js

const express = require('express');
const router = express.Router();
const farmersController = require('../controllers/farmersController');


// POST /api/farmers
router.post('/api/farmers', farmersController.createFarmer);

router.get('/api/Farmers',farmersController.getFarmers);

router.put('/api/Farmers/:id', farmersController.updateFarmer);

router.delete('/api/Farmers/:id',farmersController.deleteFarmer)


module.exports = router;
