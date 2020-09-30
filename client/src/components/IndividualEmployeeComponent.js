import React from "react";
import UpdateModalComponent from "./UpdateModalComponent";
export default function ListedEmployeeComponent({
  employee,
  employees,
  setEmployees,
}) {
  const {
    badge,
    firstName,
    lastName,
    department,
    position,
    hireDate,
    _id,
  } = employee;

  return (
    <tr>
      <td>
        <UpdateModalComponent
          key={_id}
          buttonLabel="Update"
          className="add-btn"
          employee={employee}
          setEmployees={setEmployees}
          employees={employees}
        />
      </td>
      <td>{badge}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{department}</td>
      <td>{position}</td>
      <td>{hireDate.substring(0, 10)}</td>
    </tr>
  );
}