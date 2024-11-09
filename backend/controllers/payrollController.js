const Payroll = require('../models/Payroll');
const Employee = require('../models/Employee');

exports.createPayroll = async (req, res) => {
  const { employeeId, month, year, salary, taxes, netSalary } = req.body;

  try {
    const newPayroll = new Payroll({ employeeId, month, year, salary, taxes, netSalary });
    await newPayroll.save();
    res.status(201).json(newPayroll);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.find().populate('employeeId');
    res.status(200).json(payroll);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
