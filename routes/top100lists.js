const express = require('express');
const router = express.Router();
const top100listController = require('../controllers/top100listController');

router.get('/', top100listController.getAllTop100Lists);
router.get('/:year', top100listController.getTop100ListByYear);
router.post('/', top100listController.createTop100List);
router.put('/:year', top100listController.updateTop100List);
router.delete('/:year', top100listController.deleteTop100List);

module.exports = router;
