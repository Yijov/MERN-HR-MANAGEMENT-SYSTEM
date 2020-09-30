import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmployeesContextProvider } from "./EmployeesContext";
import { DepartmentContextProvider } from "./DepartmentContext";
import NavbarComponent from "./components/NavbarComponent";
import EmployeesListComponent from "./components/EmployeeListComponent";
import PopUpModalComponent from "./components/PopUpModalComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <EmployeesContextProvider>
        <DepartmentContextProvider>
          <div className="container">
            <PopUpModalComponent
              buttonLabel="AddEmployees"
              className="add-btn"
            />
            <EmployeesListComponent />
          </div>
        </DepartmentContextProvider>
      </EmployeesContextProvider>
    </div>
  );
}

export default App;
