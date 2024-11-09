const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  const { name, position, department, salary, bankDetails, taxInfo } = req.body;
  
  try {
    const newEmployee = new Employee({ name, position, department, salary, bankDetails, taxInfo });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
