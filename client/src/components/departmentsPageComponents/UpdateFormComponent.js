import React, { useState, useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import axios from "axios";

export default function EmployeeFormComponent({ department }) {
  const [departments, setDepartments] = useContext(DepartmentContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const { departmentName, manager, _id } = department;

  const onSubmit = async (data) => {
    setLoading(true);

    //Settin the headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //arrange the state before setting it
    let newState = departments.filter((dep) => dep._id !== department._id);
    newState = [...newState, data].sort(function (a, b) {
      if (a.departmentName > b.departmentName) return 1;
      if (a.departmentName < b.departmentName) return -1;
      return 0;
    });
    const departmentToPatch = `http://localhost:5000/api/departments/${_id}`;

    //Submit to the API

    if (
      window.confirm(
        "¿Are you sure you want to Update this Department? \n This will Update all employees under this department as well"
      )
    ) {
      try {
        await axios.patch(departmentToPatch, data, config);
        await setDepartments([...newState]);
        window.alert("Deparment Updated");
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="departmentName">Department Name</label>
      <input
        type="text"
        name="departmentName"
        defaultValue={departmentName}
        required
        ref={register}
      />
      <label htmlFor="manager">Department Manager</label>
      <input
        type="text"
        name="manager"
        defaultValue={manager}
        required
        ref={register}
      />

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
