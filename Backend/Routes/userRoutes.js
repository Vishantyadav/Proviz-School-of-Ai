// routes/applicationRoutes.js

const express = require('express');
const { registerJobApplication, getAllJobApplications } = require('../controllers/jobApplicationController');
const router = express.Router();

// Route to register a new job application
router.post('/jobapplications', registerJobApplication);

// Route to get all job applications
router.get('/jobapplications', getAllJobApplications);

module.exports = router;
