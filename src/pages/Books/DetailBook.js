import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../apis/api";
import axios from "axios";
import ConfirmationModal from "../../components/ConfirmationModal";

function DetailBook(props) {
  const [book, setBook] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(`/api/book/detail-book/${id}`);
      setBook({ ...response.data });
      console.log(response);
    } catch (err) {}
  }

  useEffect(() => {
    fetchData();
    console.log(`/api/book/detail-book/${id}`);
  }, []);

  useEffect(() => {
    console.log(book);
  }, [book]);

  /*function DetailBook() {
  const [bookDetail, setBookDetail] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: 0,
    genre: "",
    coverImage: "",
  });
  const [showModal, setShowModal] = useState(false);

  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get(
          `http://localhost:4000/api/book/detail-book/${_id}`
        );

        setBookDetail({ ...response.data });
      } catch (err) {
        console.error(err);
        console.log("erro encontrado");
      }
    }
    fetchBook();
  }, [_id]);*/

  return (
    <div className="container">
      <div className=" d-flex justify-content-between">
        <div className="img-fluid">
          <img className="img-detalhe" alt={book.title} src={book.coverImage} />
        </div>
        <div>
          <Link
            to={`/update-book/${id}`}
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
          {book.title}
        </h3>
        <h4>
          <strong>Author: </strong>
          {book.author}
        </h4>

        <h4>
          <strong>Ano: </strong>
          {book.releaseYear}
        </h4>
        <h4>
          <strong>Sinopse: </strong>
          {book.synopsis}
        </h4>
        <h4>
          <strong>Gênero: </strong>
          {book.genre}
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

export default DetailBook;
