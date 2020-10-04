import React, { useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";
import { Table } from "reactstrap";

import IndividualDepartmentComponent from "./IndividualDepartmentComponent";

const DepartmentsListComponent = () => {
  const [departments] = useContext(DepartmentContext);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Update</th>
          <th>Department</th>
          <th>Manager</th>
          <th>Number Of Employees</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((department) => (
          <IndividualDepartmentComponent
            key={department.departmentName}
            department={department}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default DepartmentsListComponent;
