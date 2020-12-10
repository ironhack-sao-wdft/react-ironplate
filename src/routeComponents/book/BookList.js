import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import api from "../../apis/bookApi";

import trashIcon from "../../assets/images/trashIcon.svg";
import pencilIcon from "../../assets/images/pencilIcon.svg";

import LoadingSpinner from "../../components/LoadingSpinner";
import ConfirmationModal from "../../components/ConfirmationModal";

function BookList() {
  // 2. Definir state no formato da resposta do servidor
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deletionId, setDeletionId] = useState("");

  const history = useHistory();

  function handleModalClose() {
    setShowModal(false);
  }

  // 1. Buscar a lista de livros no servidor (backend)
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get("/book");
        console.log(response);
        setBooks([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err.response);
        setLoading(false);
        if (err.response.status === 404) {
          return history.push("/not-found");
        }

        if (err.response.status === 500) {
          return history.push("/internal-server-error");
        }
      }
      // axios
      //   .get("http://localhost:1234/book")
      //   .then((response) => {
      //     console.log(response);
      //     setBooks([...response.data]);
      //   })
      //   .catch((err) => console.error(err));
    }
    fetchBooks();
  }, [history]);

  function renderTable() {
    if (loading) {
      return <LoadingSpinner />;
    }

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <Link to={`/book/${book._id}`}>See More</Link>
                <button
                  className="btn btn-danger btn-sm mx-2"
                  onClick={() => {
                    setDeletionId(book._id);
                    setShowModal(true);
                  }}
                >
                  <img src={trashIcon} alt="trash icon" />
                </button>
                <Link
                  className="btn btn-primary btn-sm mx-1"
                  to={`/book/edit/${book._id}`}
                >
                  <img src={pencilIcon} alt="pencil icon" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  // 3. Preencher o JSX com o state atualizado
  return (
    <div className="d-flex justify-content-center m-5">
      {renderTable()}
      <ConfirmationModal
        show={showModal}
        handleClose={handleModalClose}
        action={`/book/delete/${deletionId}`}
      />
    </div>
  );
}

export default BookList;
