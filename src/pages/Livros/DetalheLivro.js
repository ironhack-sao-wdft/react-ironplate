import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

//import ConfirmationModal from "../../components/ConfimationModal";

function DetalheLivro() {
  const [livroDetalhe, setLivroDetalhe] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: 0,
    genre: "",
    coverImage: "",
  });
  //const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLivro() {
      try {
        const response = await api.get(`/detalhe-livro/${id}`);

        setLivroDetalhe({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchLivro();
  }, [id]);

  return (
    <div>
      <div className="img-container d-flex justify-content-between">
        <div className="img-fluid">
          <img 
          alt={livroDetalhe.title}
           src={livroDetalhe.coverImage} />
        </div>

        <div>
          <button className="btn btn-warning me-2">Editar</button>
          {/* <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Deletar
          </button> */}
        </div>
      </div>

      <h3>
        <strong>Título: </strong>
        {livroDetalhe.title}
      </h3>
      <h4>
        <strong>Author: </strong>
        {livroDetalhe.author}
      </h4>
      <h4>
        <strong>Sinopse: </strong>
        {livroDetalhe.synopsis}
      </h4>
      <h4>
        <strong>Ano: </strong>
        {livroDetalhe.releaseYear}
      </h4>

      {/* <ConfirmationModal
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
      </ConfirmationModal> */}
    </div>
  );
}

export default DetalheLivro;
