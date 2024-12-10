const express = require('express');
const { addSemesterDetails } = require('../controllers/semesterController');  // Correct path for your controller
const router = express.Router();

// POST route to add semester details
router.post('/semester-details', addSemesterDetails);

module.exports = router;
