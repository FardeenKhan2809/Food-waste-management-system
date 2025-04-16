const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/RouteController');

router.post('/api/routee', RouteController.createRoute);
router.get('/api/getroutees', RouteController.getRoute);
router.get('/api/routes/current', RouteController.fetchRoutesByCurrentDate);

router.get('/api/viewdailyroute',RouteController.viewdailyroutes);

module.exports = router;

