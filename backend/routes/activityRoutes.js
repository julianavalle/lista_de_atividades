const express = require('express');
const router = express.Router();
const activityController = require('../controller/activityController');

router.post('/activities', activityController.create);
router.put('/activities/:id', activityController.update);
router.delete('/activities/:id', activityController.delete);
router.get('/activities', activityController.list);
router.get('/activities/:id', activityController.findById);

module.exports = router;
