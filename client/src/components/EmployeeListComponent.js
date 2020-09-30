import React, { useContext } from "react";
import { EmployeeContext } from "../EmployeesContext";
import { Table } from "reactstrap";

import IndividualEmployeeComponent from "./IndividualEmployeeComponent";

const EmployeeListComponent = () => {
  const [employees] = useContext(EmployeeContext);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Update</th>
          <th>Badge ID</th>
          <th>Frist Name</th>
          <th>Last Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Hire Date</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <IndividualEmployeeComponent key={employee._id} employee={employee} />
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeListComponent;
