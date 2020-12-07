import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ConfirmationModal(props) {
  return (
    <Modal centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please confirm your action</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>This action is irreversible. Are you sure you want proceed?</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.handleClose}>
          Cancel
        </button>
        <Link className="btn btn-danger" to={props.action}>
          Confirm
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
