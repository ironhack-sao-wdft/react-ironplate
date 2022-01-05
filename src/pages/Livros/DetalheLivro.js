import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfimationModal";

function PosttDetail() {
  const [postDetails, setPostDetails] = useState({
    nickName: "",
    idade: "",
    estado: "",
    cidade: "",
    descricao: "",
  });
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/detalhe-post/${id}`);

        setPostDetails({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <div>
      <div className="img-container d-flex justify-content-between">
        <div>
          <button className="btn btn-warning me-2">Editar</button>
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Deletar
          </button>
        </div>
      </div>

      <h3>
        <strong>Nome: </strong>
        {postDetails.nickName}
      </h3>
      <h4>
        <strong>idade: </strong>
        {postDetails.idade}
      </h4>
      <h4>
        <strong>estado: </strong>
        {postDetails.estado}
      </h4>
      <h4>
        <strong>Cidade: </strong>
        {postDetails.cidade}
      </h4>
      <h4>
        <strong>Descrição: </strong>
        {postDetails.descricao}
      </h4>

      <ConfirmationModal
        title="Tem certeza?"
        variant="danger"
        confirmationText="Deletar"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirmation={() => {
          navigate(`/delete-post/${id}`);
          setShowModal(false);
        }}
      >
        Tem certeza que quer deletar?
      </ConfirmationModal>
    </div>
  );
}

export default PosttDetail;
