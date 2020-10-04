import React from "react";
import DepartmentsListComponent from "./components/departmentsPageComponents/DepartmentsListComponent";
import AddDepartmentModalComponent from "./components/departmentsPageComponents/AddDepartmentModalComponent";
import { DepartmentContextProvider } from "./context/DepartmentContext";

export default function DepartmentsPage() {
  return (
    <div className="page">
      <DepartmentContextProvider>
        <div className="page">
          <div className="employeeActions">
            <AddDepartmentModalComponent
              buttonLabel="Add Department"
              className="add-btn"
            />
            <div className="searchBarDiv">
              <label htmlFor="search-bar">Search</label>
              <input
                type="text"
                name="search-bar"
                className="searchBar"
                placeholder="Search Department"
              />
            </div>
            <label htmlFor="searchType">Search by</label>
            <select name="searchType">
              <option value="department">Department Name</option>
              <option value="manager">Manager Badge ID</option>
            </select>
          </div>

          <div className="container">
            <DepartmentsListComponent />
          </div>
        </div>
      </DepartmentContextProvider>
    </div>
  );
}
