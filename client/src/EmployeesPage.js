import React from "react";
import EmployeesListComponent from "./components/employeePageComponents/EmployeeListComponent";
import PopUpModalComponent from "./components/employeePageComponents/PopUpModalComponent";
import { DepartmentContextProvider } from "./context/DepartmentContext";
import { EmployeesContextProvider } from "./context/EmployeesContext";

export default function EmployeesPage() {
  return (
    <EmployeesContextProvider>
      <DepartmentContextProvider>
        <div className="container">
          <PopUpModalComponent buttonLabel="AddEmployees" className="add-btn" />
          <EmployeesListComponent />
        </div>
      </DepartmentContextProvider>
    </EmployeesContextProvider>
  );
}
