import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import axios from "axios";
import DepartmentSelectComponen from "./DepartmentSelectComponent";

export default function EmployeeFormComponent({
  toggle,
  employees,
  setEmployees,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post("http://localhost:5000/api/employees", data, config);
      //await addEmployee(data)
      setEmployees([...employees, data]);
      toggle();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="badge">Badge ID</label>
      <input type="text" name="badge" required ref={register} />
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" required ref={register} />
      <label htmlFor="lastNamet">Last Name</label>
      <input type="text" name="lastName" required ref={register} />
      <label htmlFor="department">Position</label>
      <input type="text" name="position" required ref={register} />
      <label htmlFor="department">Department</label>
      <select name="department" required ref={register}>
        <DepartmentSelectComponen />
      </select>
      <label htmlFor="hireDate">Hire Date</label>
      <input name="hireDate" type="date" required ref={register} />
      <button className="btn btn-info add" disabled={loading}>
        {loading ? (
          <Spinner style={{ width: "2rem", height: "2rem" }} />
        ) : (
          "Create Employee"
        )}
      </button>
    </form>
  );
}
