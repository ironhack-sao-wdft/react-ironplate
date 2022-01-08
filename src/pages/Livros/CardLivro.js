import { useState } from "react";

import { Link,useParams, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import ConfirmationModal from "../../components/ConfirmationModal";

function CardLivro(props) {
  const [showModal, setShowModal] = useState(false);

   const { id } = useParams();
    const navigate = useNavigate();

  return (
    <div className="list-group-item ">
      <div class="img-fluid card" style={{ width: "18rem" }}>
        <img
          src={props.coverImage}
          class="card-img-top img"
          alt={props.title}
        />
        <div class="card-body">
          <p class="card-text">
            {/* <h2>Título</h2> */}
            <h2>
              <strong>{props.title}</strong>
            </h2>
          </p>
          <p>
            {/* <h2>Author</h2> */}
            <h3>
              <strong>{props.author}</strong>
            </h3>
          </p>
          {/* <h2>Gênero</h2>
          <p>
            <strong>{props.genre}</strong>
          </p> */}
          {/* <h2>Ano</h2> */}
          <h3>
            <strong>{props.releaseYear}</strong>
          </h3>
          {/* <h2>Sinopse</h2> */}
          {/* <p>
            <strong>{props.synopsis}</strong>
          </p> */}
        </div>
        <div className="container d-flex justify-content-between">
          <div className="btn btn-primary detalhe">
            <Link className="link-detalhe" to={`/livro/detalhe/${props._id}`}>
              {" "}
              Detalhe
            </Link>
          </div>

          <button className="btn btn-warning">
            <Link to={`/edit-livro/${props._id}`}>
              <BiEdit />
            </Link>
          </button>
          <button
            className="btn btn-danger btn-link"
            onClick={() => setShowModal(true)}
          >
            <FaTrashAlt />
          </button>
          <ConfirmationModal
            title="Tem certeza que quer deletar?"
            variant="danger"
            confirmationText="Deletar"
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleConfirmation={() => {
              navigate(`/livro/delete/${props._id}`);
              setShowModal(false);
            }}
          >
            Esta ação é irreversível!
          </ConfirmationModal>
        </div>
      </div>
    </div>
  );
}

export default CardLivro;
