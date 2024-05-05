const express = require('express');
const router = express.Router();
const travelplanController = require('../controllers/travelplanController');

router.get('/:userId', travelplanController.getTravelPlansByUserId);
router.post('/', travelplanController.createTravelPlan);
router.put('/:userId/:planId', travelplanController.updateTravelPlan);
router.delete('/:userId/:planId', travelplanController.deleteTravelPlan);

module.exports = router;
