import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../apis/api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DeletePost() {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  function handleClose() {
    setShow(false);
    history.goBack(); // Volta para a página anterior
  }

  async function handleDelete() {
    try {
      const response = await api.delete(`/post/${id}`);

      history.push(`/profile`);
    } catch (err) {
      console.error(err.response);
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Deletar Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja deletar o post?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePost;

