import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";

function DetalheLivro(props) {
  const [livroDetalhe, setLivroDetalhe] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: 0,
    genre: "",
    coverImage: "",
  });
  const [showModal, setShowModal] = useState(false);

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
    <div className="container detalhes">
      <div className=" d-flex justify-content-between">
        <div className="img-fluid">
          <img
            className="img-detalhe"
            alt={livroDetalhe.title}
            src={livroDetalhe.coverImage}
          />
        </div>
        <div>
          <Link
            to={`/edit-livro/${id}`}
            type="button"
            className="btn btn-link  btn-warning mr-3"
          >
            Editar
          </Link>
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Deletar
          </button>
        </div>
      </div>
      <div className="textos">
        <h3>
          <strong>Título: </strong>
          {livroDetalhe.title}
        </h3>
        <h4>
          <strong>Author: </strong>
          {livroDetalhe.author}
        </h4>

        <h4>
          <strong>Ano: </strong>
          {livroDetalhe.releaseYear}
        </h4>
        <h4>
          <strong>Sinopse: </strong>
          {livroDetalhe.synopsis}
        </h4>
        <h4>
          <strong>Gênero: </strong>
          {livroDetalhe.genre}
        </h4>
        <ConfirmationModal
          title="Tem certeza que quer deletar?"
          variant="danger"
          confirmationText="Deletar"
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleConfirmation={() => {
            navigate(`/livro/delete/${id}`);
            setShowModal(false);
          }}
        >
          Esta ação é irreversível!
        </ConfirmationModal>
      </div>
    </div>
  );
}

export default DetalheLivro;
