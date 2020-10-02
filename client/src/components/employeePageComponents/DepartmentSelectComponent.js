import React, { useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";

function DepartmentSelectComponent() {
  const [departments] = useContext(DepartmentContext);

  return (
    <>
      {departments.map((departmentObject) => (
        <option
          key={departmentObject.departmentName}
          value={departmentObject.departmentName}
        >
          {departmentObject.departmentName}
        </option>
      ))}
    </>
  );
}

export default DepartmentSelectComponent;
