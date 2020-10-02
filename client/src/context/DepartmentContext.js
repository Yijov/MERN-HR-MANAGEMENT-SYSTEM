import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const DepartmentContext = createContext();

export function DepartmentContextProvider(props) {
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
    <div>
      <DepartmentContext.Provider value={[departments, setDepartments]}>
        {props.children}
      </DepartmentContext.Provider>
    </div>
  );
}
