import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import api from "../../apis/api";

import ConfirmationModal from "../../components/ConfirmationModal";

function BookDetail() {
  const [bookDetail, setBookDetail] = useState({
    title: '',
    author: '',
    synopsis: '',
    releaseYear: 0,
    genre: "",
    coverImage: '',
  });
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get(`/detail-book/${id}`);

        setBookDetail({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <div className="container">
      <div className=" d-flex justify-content-between">
        <div className="img-fluid">
          <img
            className="img-detalhe"
            alt={bookDetail.title}
            src={bookDetail.coverImage}
          />
        </div>
        <div>

          <Link
            to={`/edit-book/${id}`}
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
          {bookDetail.title}
        </h3>
        <h4>
          <strong>Author: </strong>
          {bookDetail.author}
        </h4>
        <h4>
          <strong>Ano: </strong>
          {bookDetail.releaseYear}
        </h4>
        <h4>
          <strong>Sinopse: </strong>
          {bookDetail.synopsis}
        </h4>
        <h4>
          <strong>Gênero: </strong>
          {bookDetail.genre}
        </h4>
        <ConfirmationModal
          title="Tem certeza que quer deletar?"
          variant="danger"
          confirmationText="Deletar"
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleConfirmation={() => {
            navigate(`/book/delete/${id}`);
            setShowModal(false);
          }}
        >
          Esta ação é irreversível!
        </ConfirmationModal>
      </div>
    </div>
  );
}

export default BookDetail;