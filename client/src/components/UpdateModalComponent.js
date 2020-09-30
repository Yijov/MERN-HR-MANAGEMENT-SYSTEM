import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UpdateFormComponent from "./UpdateFormComponent";
import axios from "axios";
const UpdateModalComponent = (props) => {
  const { buttonLabel, className, employees, setEmployees, employee } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDeleEmployee = async () => {
    if (window.confirm("Are you sure you want to delete this employee")) {
      const allEmployees = `http://localhost:5000/api/employees/${employee._id}`;
      axios.delete(allEmployees).then((res) => {
        setEmployees([...employees]); //reset the state
        window.alert("Employee Deleted");
        toggle();
      });
    }
  };

  return (
    <div>
      <Button color="dark" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Insert New Values</ModalHeader>
        <ModalBody>
          <div>
            <UpdateFormComponent
              toggle={toggle}
              employees={employees}
              setEmployees={setEmployees}
              employee={employee}
            />
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
