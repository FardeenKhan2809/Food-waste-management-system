const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');

//router.post('/api/schedule/get-schedule-data', scheduleController.createSchedule);


// Route to count requests for the previous day
router.get('/api/total-request-count', scheduleController.getTotalRequestCount);


router.post('/api/schedule', scheduleController.createSchedule);

module.exports = router;