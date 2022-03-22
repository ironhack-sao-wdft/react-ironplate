import Modal from "react-bootstrap/Modal";

function ConfirmationModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.handleClose}>
          Cancelar
        </button>
        <button
          className={`btn btn-${props.variant}`}
          onClick={props.handleConfirmation}
        >
          {props.confirmationText}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
