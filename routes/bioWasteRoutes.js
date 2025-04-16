// routes/bioWasteRoutes.js

const express = require('express');
const router = express.Router();
const bioWasteController = require('../controllers/bioWasteController');


// POST /api/bioWastes
router.post('/api/bioWastes', bioWasteController.createBioWaste);

router.get('/api/BioWaste',bioWasteController.getBiogas);

router.put('/api/biogas/:id',bioWasteController.updateBiogas);

router.delete('/api/biogas/:id',bioWasteController.deleteBiogas);

module.exports = router;
