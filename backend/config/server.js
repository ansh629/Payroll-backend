const express = require('express');
const connectDB = require('./db'); // MongoDB connection configuration
const employeeRoutes = require('../routes/employees'); // Employee routes
const payrollRoutes = require('../routes/payroll'); // Payroll routes
const paymentRoutes = require('../routes/payments'); // Payment routes

// Initialize Express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Set up the routes
app.use('/api/employees', employeeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/payments', paymentRoutes);

// Server listening on port 5000 or environment-defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
