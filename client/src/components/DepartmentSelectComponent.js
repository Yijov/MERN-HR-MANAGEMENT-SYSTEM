import React, { useEffect, useState } from "react";
import axios from "axios";

function DepartmentSelectComponent() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // On load calls the back en for the list of departments
    const allDepartments = "http://localhost:5000/api/departments";
    let cancel;
    axios
      .get(allDepartments, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setDepartments(res.data);
      });
    return () => {
      cancel();
    };
  }, []);

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
