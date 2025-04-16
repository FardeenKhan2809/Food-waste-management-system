// routes/VolunteerRoutes.js
const express = require('express');
const router = express.Router();
const VolunteerController = require('../controllers/volunteerController');

router.post('/api/volunteer-table', VolunteerController.createVolunteer);

router.get('/api/volunteer-tables',VolunteerController.getVolunteers);

router.put('/api/volunteer/:id', VolunteerController.updateVolunteer);

router.delete('/api/volunteer/:id',VolunteerController.deleteVolunteer);

router.get('/api/volunteer/:volunteerId',VolunteerController.getVolunteerData);




module.exports = router;
