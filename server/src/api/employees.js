const { Router } = require("express");
const router = Router();
const employee = require("../models/employee.model");

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
    const employeesToAdd = await new employee(request.body);
    await employeesToAdd.save();
    response.json({ add: true, employeesToAdd });
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
    singleEmployee.remove();
    response.json({ deteted: true, singleEmployee });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
