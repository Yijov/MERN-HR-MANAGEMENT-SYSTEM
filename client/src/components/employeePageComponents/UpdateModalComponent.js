import React, { useState, useContext } from "react";
import { EmployeeContext } from "../../context/EmployeesContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UpdateFormComponent from "./UpdateFormComponent";
import axios from "axios";

const UpdateModalComponent = (props) => {
  const [employees, setEmployees] = useContext(EmployeeContext);
  const { buttonLabel, className, employee } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const newState = employees.filter((emp) => emp._id !== employee._id);
  const employeesToDelete = `http://localhost:5000/api/employees/${employee._id}`;

  const handleDeleEmployee = async () => {
    if (window.confirm("Are you sure you want to delete this employee")) {
      try {
        await axios.delete(employeesToDelete);
        await setEmployees([...newState]);
        window.alert("Employee Deleted");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Button color="dark" onClick={toggle} className="add-btn">
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Insert New Values</ModalHeader>
        <ModalBody>
          <div>
            <UpdateFormComponent toggle={toggle} employee={employee} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDeleEmployee}>
            Delete Employee
          </Button>
          {"  "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UpdateModalComponent;
