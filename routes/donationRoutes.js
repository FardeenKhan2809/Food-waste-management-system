// routes/donationRoutes.js

const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');


// POST /api/donations
router.post('/api/donations', donationController.createDonation);

router.get('/api/donation',donationController.getDonations);

router.put('/api/donation/:id', donationController.updateDonation);

router.delete('/api/donation/:id',donationController.deleteDonation);



module.exports = router;
