import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeFormComponent from "./EmployeeFormComponent";
const PopUpModalComponent = (props) => {
  const { buttonLabel, className, employees, setEmployees } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="dark" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Please Fill</ModalHeader>
        <ModalBody>
          <div>
            <EmployeeFormComponent
              toggle={toggle}
              employees={employees}
              setEmployees={setEmployees}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopUpModalComponent;