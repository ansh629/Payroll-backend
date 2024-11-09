const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  month: String,
  year: Number,
  salary: Number,
  taxes: Number,
  netSalary: Number
});

module.exports = mongoose.model('Payroll', payrollSchema);
