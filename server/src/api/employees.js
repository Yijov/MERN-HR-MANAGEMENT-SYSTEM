const { Router } = require("express");
const router = Router();
const employee = require("../models/employee.model");
const department = require("../models/department.model");

//GET  all employees at /api/employees
router.get("/", async (request, response, next) => {
  try {
    const allEmployees = await employee.find().sort({ firstName: 1 });
    response.json(allEmployees);
  } catch (error) {
    next(error);
  }
});

//GET  one employees at /api/employees
router.get("/:id", async (request, response, next) => {
  try {
    const singleEmployee = await employee.findById(request.params.id);
    response.json(singleEmployee);
  } catch (error) {
    next(error);
  }
});

//POST add an employee

router.post("/", async (request, response, next) => {
  try {
    const employeeToAdd = await new employee(request.body);
    await employeeToAdd.save();
    await SetDepartmentNumOfEmployees(employeeToAdd.department, "increase");
    response.json({ add: true, employeeToAdd });
  } catch (error) {
    next(error);
  }
});

//Updates an existing employee one employees at /api/employees
router.patch("/:id", async (req, res) => {
  try {
    const updatedEmployee = await employee.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.json(updatedEmployee);
  } catch (err) {
    res.json({ error: err });
  }
});

//Delete one employees at /api/employees
router.delete("/:id", async (request, response, next) => {
  try {
    const singleEmployee = await employee.findById(request.params.id);
    await singleEmployee.remove();
    await SetDepartmentNumOfEmployees(singleEmployee.department, "decrease");
    response.json({ deteted: true, singleEmployee });
  } catch (error) {
    next(error);
  }
});

//side effect Function to increase or decrease department count when an employee is added or removed

const SetDepartmentNumOfEmployees = async (Department, action) => {
  const [departmentToEncrease] = await department.find({
    departmentName: Department,
  });

  if (action === "increase") {
    await department.updateOne(
      { _id: departmentToEncrease._id },
      { $set: { numOFemployees: departmentToEncrease.numOFemployees + 1 } }
    );
  } else {
    await department.updateOne(
      { _id: departmentToEncrease._id },
      { $set: { numOFemployees: departmentToEncrease.numOFemployees - 1 } }
    );
  }
};

module.exports = router;
