import React, { useState, useContext } from "react";
import { EmployeeContext } from "../EmployeesContext";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import axios from "axios";
import DepartmentSelectComponen from "./DepartmentSelectComponent";

export default function EmployeeFormComponent({ toggle, employee }) {
  const [employees, setEmployees] = useContext(EmployeeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const { badge, firstName, lastName, department, position, _id } = employee;

  const onSubmit = async (data) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.patch(
        `http://localhost:5000/api/employees/${_id}`,
        data,
        config
      );
      setLoading(false);
      setEmployees([...employees]);
      setTimeout(() => {
        toggle();
      }, 2000);
    } catch (error) {}
    console.error(error);
    setError(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="badge">Badge ID</label>
      <input
        type="text"
        name="badge"
        value={badge}
        required
        ref={register}
        disabled
      />
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        defaultValue={firstName}
        required
        ref={register}
      />
      <label htmlFor="lastNamet">Last Name</label>
      <input
        type="text"
        name="lastName"
        defaultValue={lastName}
        required
        ref={register}
      />
      <label htmlFor="department">Position</label>
      <input
        type="text"
        name="position"
        defaultValue={position}
        required
        ref={register}
      />
      <label htmlFor="department">Department</label>
      <select
        name="department"
        defaultValue={department}
        required
        ref={register}
      >
        <DepartmentSelectComponen />
      </select>

      <button className="btn btn-info add" disabled={loading}>
        {loading ? (
          <Spinner style={{ width: "2rem", height: "2rem" }} />
        ) : (
          "Update"
        )}
      </button>
    </form>
  );
}
