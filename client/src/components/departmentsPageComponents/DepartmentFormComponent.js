import React, { useState, useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import axios from "axios";

export default function DepartmentFormComponent({ toggle }) {
  const [departments, setDepartments] = useContext(DepartmentContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const onSubmit = async function (data) {
    let newStatus = [...departments, data];
    newStatus = newStatus.sort(function (a, b) {
      if (a.departmentName > b.departmentName) return 1;
      if (a.departmentName < b.departmentName) return -1;
      return 0;
    });

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/departments", data, config);
      //await addEmployee(data)
      await setLoading(false);
      await setDepartments([...newStatus]);
      setTimeout(() => {
        toggle();
      }, 3000);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="departmentName">Department Name</label>
      <input type="text" name="departmentName" required ref={register} />
      <label htmlFor="manager">Manager</label>
      <input type="text" name="manager" required ref={register} />
      <button className="btn btn-info add" disabled={loading}>
        {loading ? (
          <Spinner style={{ width: "2rem", height: "2rem" }} />
        ) : (
          "Create Department"
        )}
      </button>
    </form>
  );
}
