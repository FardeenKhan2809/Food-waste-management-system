// routes/transporterRoutes.js

const express = require('express');
const router = express.Router();
const transporterController = require('../controllers/transporterController');


// POST /api/transporters
router.post('/api/transporters', transporterController.createTransporter);

router.get('/api/transporter',transporterController.getTransporter);

router.put('/api/transporters/:id',transporterController.updateTransporter);

router.delete('/api/transporters/:id',transporterController.deleteTransporter);

router.get('/api/Transporter/:transporterId',transporterController.getTransporterData);

module.exports = router;
