import React from "react";

export default function AboutPage() {
  return (
    <div className="page">
      <h1>About the Code</h1> <small>Yirbett Joseph 2020</small>
      <p>
        This a MERN App built with a <strong>REST API </strong> That sends and
        recieves <strong>JSON data</strong> . It allows to perform{" "}
        <strong>CRUD operatios</strong> Using as an example an HR department
      </p>
      <hr />
      <p>
        {" "}
        <strong>The API has several endpoits that send back JSON data:</strong>
      </p>
      <ul>
        <li>GET all Employees: /employees</li>
        <li>GET all Departments: /departments</li>
        <li>GET all One Employee: /employees/:id</li>
        <li>GET all One Department: /departments/:id</li>
        <li>
          DELETE a Department: (Including all employees in it): /departments/:id
        </li>
        <li>DELETE an Employee: /employes/:id</li>
        <li>PATCH an employee: /employes/:id</li>
        <li>PATCH a Department: /departments/:id </li>
      </ul>
      <small>For more about the API chech the server folder/src/api</small>
      <hr />
      <p>
        Some of the components in he frontEnd come from reactstrap nut most of
        the looks is custom code with SCSS for the Styles.
      </p>
      <p>
        In the future should add am authentication system, a colection of logs
        and actions performed in the sistem and more fields to each category.
        For example, you can add a STATUS field to an employee to see if its on
        vacations, medical license ot any other.
      </p>
      <p>
        The fiel badge for creating an employee only accepts an specific format:{" "}
        <strong>BDG</strong> followed by a <strong>-</strong> and
        <strong> 6 numbers</strong> . In the future it vould be added a function
        to autogenerate it.
      </p>
      <small>
        For more about the API formats chech the server folder/src/api
      </small>
    </div>
  );
}
