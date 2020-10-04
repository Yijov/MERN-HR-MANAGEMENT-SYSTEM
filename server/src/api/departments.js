const { Router } = require("express");
const router = Router();
const department = require("../models/department.model");
const employee = require("../models/employee.model");

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
    await updateAllEmployees(req.params.id, req.body.departmentName);
    const updatedDepartment = await department.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.json(updatedDepartment);
  } catch (err) {
    next(error);
  }
});

//Delete one department at /api/employees
router.delete("/:id", async (request, response, next) => {
  try {
    const singleDepartment = await department.findById(request.params.id);
    await singleDepartment.remove();
    await deleteAllEmployees(singleDepartment.departmentName);
    response.json({ deteted: true, singleDepartment });
  } catch (error) {
    next(error);
  }
});

//Side effect function to delete all employees from a department when the department is removed

const deleteAllEmployees = async (Department) => {
  const allEmployees = await employee.find({ department: Department });
  await allEmployees.map((emp) => emp.remove());
};

const updateAllEmployees = async (DepartmentID, depName) => {
  const departmentToUpdate = await department.findById(DepartmentID);

  const allEmployees = await employee.find({
    department: departmentToUpdate.departmentName,
  });
  await allEmployees.map(
    async (emp) =>
      await employee.updateOne(
        { _id: emp._id },
        { $set: { department: depName } }
      )
  );
};

module.exports = router;
