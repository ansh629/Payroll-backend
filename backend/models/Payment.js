const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  amount: Number,
  paymentDate: Date,
  status: String
});

module.exports = mongoose.model('Payment', paymentSchema);
