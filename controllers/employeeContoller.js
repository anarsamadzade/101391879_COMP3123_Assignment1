const Employee = require('../models/employeeModel');

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.eid);
  if (employee) res.status(200).json(employee);
  else res.status(404).json({ message: 'Employee not found.' });
};

exports.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.eid, req.body);
  res.status(200).json({ message: 'Employee details updated successfully.' });
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.query.eid);
  res.status(204).send();
};
