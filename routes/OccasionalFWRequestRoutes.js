const express = require('express');
const router = express.Router();
const OccasionalFWRequesController = require('../controllers/OccasionalFWRequestController');

router.post('/api/Occasional-fw', OccasionalFWRequesController.createFWOccasionalRequest);

router.get('/api/getOccasional-fw', OccasionalFWRequesController.getOccasionalFW);

router.put('/api/Occasional/:id',OccasionalFWRequesController.updateOccasionalFWRequest);

//for schedule date
router.get('/api/occasional/schedule-datewise',OccasionalFWRequesController.ScheduleOccasional);

router.delete('/api/Occasional/:id',OccasionalFWRequesController.deleteOccasionalFWRequest);


module.exports = router;