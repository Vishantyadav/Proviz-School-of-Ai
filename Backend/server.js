const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/database');
const userRoutes = require('./Routes/userRoutes');
const applicationRoutes = require('./Routes/applicationRoutes');  // Import application routes

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',  // Your frontend URL (adjust for production)
  methods: 'GET,POST,PUT,DELETE',  // Specify allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization',  // Specify allowed headers
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200,  // For legacy browsers that choke on 204
};

// Middleware
app.use(express.json());  // For parsing JSON request bodies
app.use(cors(corsOptions));  // Enable CORS with custom options

// Routes
app.use('/api/users', userRoutes);  // User-related routes
app.use('/api/applications', applicationRoutes);  // Application routes

// Root route for checking API status
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Generic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
