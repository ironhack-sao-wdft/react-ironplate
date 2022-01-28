import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../assets/styles/card.css";
import ConfirmationModal from "../../components/ConfirmationModal";

function CardBook(props) {
  const [showModal, setShowModal] = useState(false);

  const { _id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="list-group-item ">
      <div className="img-fluid card" style={{ width: "18rem" }}>
        <img
          src={props.coverImage}
          className="card-img-top img-card"
          alt={props.title}
        />
        <div className="card-body">
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
            <Link className="link-detail" to={`/book/detail-book/${props._id}`}>
              Detalhe
            </Link>
          </div>
          <div className="btn btn-warning">
            <Link className="link-detail" to={`/update-book/${props._id}`}>
              Editar
            </Link>
          </div>

          <div
            className="btn btn-danger btn-link"
            onClick={() => setShowModal(true)}
          >
            Delete
          </div>
          <ConfirmationModal
            className="fa-regular fa-trash-can"
            title="Tem certeza que deseja deletar?"
            variant="danger"
            confirmationText="Deletar"
            show={showModal}
            handleClose={() => setShowModal(false)}
            handleConfirmation={() => {
              navigate(`/delete-book/${props._id}`);
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

export default CardBook;
