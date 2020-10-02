import React from "react";

import UpdateModalComponent from "./UpdateModalComponent";
export default function ListedEmployeeComponent({ employee }) {
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
          employee={employee}
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
