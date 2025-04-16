// forgotpasswordRoutes.js

const express = require('express');
const router = express.Router();
const forgotpasswordController = require('../controllers/forgotpasswordController');

// Route for validating user
//router.get('/registrations', forgotpasswordController.validateUser);

// Route for resetting password
router.put('/registrations', forgotpasswordController.resetPassword);

module.exports = router;