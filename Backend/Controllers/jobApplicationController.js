const JobApplication = require('../Models/JobApplication');  // Use the correct model

// @desc    Register a new job application
// @route   POST /api/users/jobapplications
// @access  Public
const registerJobApplication = async (req, res) => {
  try {
    const { name, email, phoneNumber, statement } = req.body;

    // Validate input fields
    if (!name || !email || !phoneNumber || !statement) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the application already exists based on email
    const applicationExists = await JobApplication.findOne({ email });
    if (applicationExists) {
      return res.status(400).json({ message: 'Application already exists for this email' });
    }

    // Create a new job application
    const newApplication = new JobApplication({ 
      name,
      email,
      phoneNumber,
      statement,
      status: 'applied',  // default status
    });

    await newApplication.save(); // Save to DB

    // Send back the saved application
    res.status(201).json({
      _id: newApplication._id,
      name: newApplication.name,
      email: newApplication.email,
      phoneNumber: newApplication.phoneNumber,
      statement: newApplication.statement,
      status: newApplication.status,
    });
  } catch (error) {
    console.error('Error creating job application:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all job applications
// @route   GET /api/users/jobapplications
// @access  Public
const getAllJobApplications = async (req, res) => {
  try {
    const jobApplications = await JobApplication.find();  // Fetch all applications from DB
    res.json(jobApplications);
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({ message: 'Error fetching job applications' });
  }
};

module.exports = { registerJobApplication, getAllJobApplications };
