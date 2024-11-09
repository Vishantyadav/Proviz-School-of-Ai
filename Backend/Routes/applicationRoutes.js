const express = require('express');
const JobApplication = require('../Models/JobApplication');
const router = express.Router();

// GET route to fetch all job applications
router.get('/jobapplications', async (req, res) => {
  try {
    const jobApplications = await JobApplication.find(); // Fetch all job applications from DB
    res.json(jobApplications); // Sends the job applications with status field
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({ message: 'Error fetching job applications' });
  }
});

// POST route to create a job application
router.post('/jobapplications', async (req, res) => {
  try {
    const { name, email, phoneNumber, statement } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !phoneNumber || !statement) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newJobApplication = new JobApplication({
      name,
      email,
      phoneNumber,
      statement,
      status: 'applied', // default status
    });

    await newJobApplication.save(); // Save to DB
    res.status(201).json(newJobApplication); // Send back the saved job application
  } catch (error) {
    console.error('Error creating job application:', error);
    res.status(500).json({ message: 'Error creating job application' });
  }
});

module.exports = router;
