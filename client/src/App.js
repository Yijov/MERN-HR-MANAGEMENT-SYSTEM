import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import EmployeesListComponent from "./components/EmployeeListComponent";
import PopUpModalComponent from "./components/PopUpModalComponent";

function App() {
  const [employees, setEmployees] = useState([]);

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
