import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModel(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => props.onClose(true)
  const handleDismiss = () => props.onClose(false)

  return (
    <>
      
      <Modal show={show} onHide={handleDismiss}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure youn want to delete this product</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDismiss}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModel;