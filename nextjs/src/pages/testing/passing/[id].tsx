import React from "react";
import Modal from "../../../components/Modal";
import TestingPassingForm from "./../../../components/TestingPassingForm";

interface Props {}

const TestingPassing = (props: Props) => {
  const handleClose = () => {
    console.log(123);
  };

  return (
    <Modal
      close={handleClose}
      hideClose
      open={true}
      style={{ backgroundColor: "transparent" }}
    >
      <TestingPassingForm />
    </Modal>
  );
};

export default TestingPassing;
