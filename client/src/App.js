import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import EmployeesListComponent from "./components/EmployeeListComponent";
import PopUpModalComponent from "./components/PopUpModalComponent";

function App() {
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
  }, [employees]);

  return (
    <div className="App">
      <NavbarComponent />
      <div className="container">
        <PopUpModalComponent
          buttonLabel="AddEmployees"
          className="add-btn"
          employees={employees}
          setEmployees={setEmployees}
        />
        <EmployeesListComponent
          employees={employees}
          setEmployees={setEmployees}
        />
      </div>
    </div>
  );
}

export default App;
