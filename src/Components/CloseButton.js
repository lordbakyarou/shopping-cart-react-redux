// Update the import statement to use the correct path
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { useDispatch } from "react-redux";
import { emptyAllItems } from "../Redux/cartSlice";

function CloseButton() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(emptyAllItems());

    setShow(true);
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, All your items are placed and will be delivered shortly!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CloseButton;
