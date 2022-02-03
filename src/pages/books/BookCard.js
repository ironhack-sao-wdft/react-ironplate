import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "../../components/ConfirmationModal";
import "../../assets/styles/index.css";

function BookCard(props) {
  const [showModal, setShowModal] = useState(false);
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
            <Link className="link-detail" to={`/book/detail/${props._id}`}>
              Detalhes
            </Link>
          </div>

          <button className="btn btn-warning">
            <Link to={`/edit-book/${props._id}`}>
              Editar
            </Link>
          </button>

          <button
            className="btn btn-danger btn-link"
            onClick={() => setShowModal(true)}
          >
            Deletar
          </button>
          <ConfirmationModal
            title="Tem certeza que quer deletar esse livro?"
            variant="danger"
            confirmationText="Deletar"
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleConfirmation={() => {
              navigate(`/book/delete/${props._id}`);
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

export default BookCard;
