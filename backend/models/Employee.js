const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  salary: Number,
  bankDetails: {
    accountNumber: String,
    bankName: String
  },
  taxInfo: {
    incomeTaxRate: Number,
    deductions: Number
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
