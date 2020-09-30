import React from "react";
import { Table } from "reactstrap";
import IndividualEmployeeComponent from "./IndividualEmployeeComponent";
const EmployeeListComponent = ({ employees, setEmployees }) => {
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
          <IndividualEmployeeComponent
            key={employee._id}
            employee={employee}
            setEmployees={setEmployees}
            employees={employees}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeListComponent;
