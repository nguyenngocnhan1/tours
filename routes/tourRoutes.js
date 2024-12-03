// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router.get('/', tourController.getTours);
router.post('/', tourController.addTour);

module.exports = router;
