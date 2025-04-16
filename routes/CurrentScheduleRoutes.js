const express = require('express');
const router = express.Router();
const CurrentscheduleController = require('../controllers/CurrentScheduleController');

router.post('/api/currentschedule', CurrentscheduleController.addToCurrentSchedule);

router.get('/api/schedulemain',CurrentscheduleController.ScheduleMain);

module.exports = router;