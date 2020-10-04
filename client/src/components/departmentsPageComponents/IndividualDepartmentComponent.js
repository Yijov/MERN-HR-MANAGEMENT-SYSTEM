import React from "react";
import UpdateModalComponent from "./UpdateModalComponent";

export default function IndividualDepartmentComponent({ department }) {
  const { departmentName, manager, numOFemployees, _id } = department;

  return (
    <tr>
      <td>
        <UpdateModalComponent
          key={_id}
          buttonLabel="Update"
          department={department}
        />
      </td>
      <td>{departmentName}</td>
      <td>{manager}</td>
      <td>{numOFemployees}</td>
    </tr>
  );
}
