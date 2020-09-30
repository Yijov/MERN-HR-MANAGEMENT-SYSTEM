import React, { useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import IndividualEmployeeComponent from "./IndividualEmployeeComponent";

const EmployeeListComponent = ({ employees, setEmployees }) => {
  useEffect(() => {
    // On load calls the back en for the list of  employees
    const allEmployees = "http://localhost:5000/api/employees";
    let cancel;
    axios
      .get(allEmployees, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setEmployees(res.data);
      });

    return () => {
      cancel();
    };
  }, []);

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
