import { useState } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import ConfirmationModal from "../../components/ConfirmationModal";



function CardLivro(props) {
  const [showModal, setShowModal] = useState(false);

  const {id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="list-group-item ">
      <div class="img-fluid card" style={{ width: "18rem" }}>
        <img
          src={props.coverImage}
          class="card-img-top img-card"
          alt={props.title}
        />
        <div class="card-body">
             <h3>
              <strong>{props.title}</strong>
            </h3>
            <h5>
              <strong>{props.author}</strong>
            </h5>
          
          <h4>
            <p>{props.releaseYear}</p>
          </h4>

        </div>
        <div className="container-fluid d-flex justify-content-between">
          <div className="btn btn-primary">
            <Link className="link-detalhe" to={`/livro/detalhe/${props._id}`}>
              
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
