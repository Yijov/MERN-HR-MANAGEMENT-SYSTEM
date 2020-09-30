const { Router } = require("express");
const router = Router();
const department = require("../models/department.model");

//GET  all employees at /api/departments
router.get("/", async (request, response, next) => {
  try {
    const allDepartments = await department.find().sort({ departmentName: 1 });
    response.json(allDepartments);
  } catch (error) {
    next(error);
  }
});

//GET  one department at /api/departments
router.get("/:id", async (request, response, next) => {
  try {
    const singleDepartment = await department.findById(request.params.id);
    response.json(singleDepartment);
  } catch (error) {
    next(error);
  }
});

//POST add a department

router.post("/", async (request, response, next) => {
  try {
    console.log(Date.now());
    const departmentToAdd = await new department(request.body);
    await departmentToAdd.save();
    response.json({ add: true, departmentToAdd });
  } catch (error) {
    next(error);
  }
});

//Updates an existing department one employees at /api/employees
router.patch("/:id", async (req, res) => {
  try {
    const updatedDepartment = await employee.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.json(updatedDepartment);
  } catch (err) {
    res.json({ error: err });
  }
});

//Delete one department at /api/employees
router.delete("/:id", async (request, response, next) => {
  try {
    const singleDepartment = await department.findById(request.params.id);
    singleDepartment.remove();
    response.json({ deteted: true, singleDepartment });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
