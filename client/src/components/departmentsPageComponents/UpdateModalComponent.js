import React, { useState, useContext } from "react";
import { DepartmentContext } from "../../context/DepartmentContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UpdateFormComponent from "./UpdateFormComponent";
import axios from "axios";

const UpdateModalComponent = (props) => {
  const [departments, setDepartments] = useContext(DepartmentContext);
  const { buttonLabel, className, department } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const newState = departments.filter((dep) => dep._id !== department._id);
  const departmentToDelete = `http://localhost:5000/api/departments/${department._id}`;

  const handleDeleteDepartment = async () => {
    if (
      window.confirm(
        "¿Are you sure you want to delete this Department? \n This will delete all employees under this department as well"
      )
    ) {
      try {
        await axios.delete(departmentToDelete);
        await setDepartments([...newState]);
        window.alert("Department Deleted");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Button color="primary" onClick={toggle} className="add-btn">
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Insert New Values</ModalHeader>
        <ModalBody>
          <div>
            <UpdateFormComponent toggle={toggle} department={department} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDeleteDepartment}>
            Delete Department
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
