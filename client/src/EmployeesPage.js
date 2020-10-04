import React from "react";
import EmployeesListComponent from "./components/employeePageComponents/EmployeeListComponent";
import AddEmployeeModalComponent from "./components/employeePageComponents/AddEmployeeModalComponent";
import { DepartmentContextProvider } from "./context/DepartmentContext";
import { EmployeesContextProvider } from "./context/EmployeesContext";

export default function EmployeesPage() {
  return (
    <EmployeesContextProvider>
      <DepartmentContextProvider>
        <div className="page">
          <div className="employeeActions">
            <AddEmployeeModalComponent
              buttonLabel="Add Employee"
              className="add-btn"
            />
            <div className="searchBarDiv">
              <label htmlFor="search-bar">Search</label>
              <input
                type="text"
                name="search-bar"
                className="searchBar"
                placeholder="Search Employee"
              />
            </div>
            <label htmlFor="searchIype">Search by</label>
            <select name="searchType">
              <option value="badge">Badge ID</option>
              <option value="department">Department</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Lasst Name</option>
              <option value="position">Position</option>
            </select>
          </div>

          <div className="container">
            <EmployeesListComponent />
          </div>
        </div>
      </DepartmentContextProvider>
    </EmployeesContextProvider>
  );
}
