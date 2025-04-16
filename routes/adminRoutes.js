// routes/adminRoutes.js (unchanged)
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/api/createadmin', adminController.registerUser);

router.get('/api/admins', adminController.getAdmins);

router.put('/api/admins/:id', adminController.updateAdmin);


// Delete admin
router.delete('/api/admins/:id', adminController.deleteAdmin);


module.exports = router;