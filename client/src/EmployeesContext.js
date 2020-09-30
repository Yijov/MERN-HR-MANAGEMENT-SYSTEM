import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

export function EmployeesContextProvider(props) {
  const [employees, setEmployees] = useState([]);
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
  }, [setEmployees]);

  return (
    <div>
      <EmployeeContext.Provider value={[employees, setEmployees]}>
        {props.children}
      </EmployeeContext.Provider>
    </div>
  );
}
