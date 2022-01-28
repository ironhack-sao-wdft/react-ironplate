import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../apis/api";

import React from "react";
import Navbar from "../../components/Navbar";
import FormField from "../../components/Form/FormField";

function CreateBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: "",
    genre: "",
    coverImage: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(
        "http://localhost:4000/api/book/create-book",
        bookData
      );
      setLoading(false);
      console.log(response);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="container"
          className="form-label"
        >
          <h1>Novo Livro</h1>
          <div>
            <FormField
              className="form-control"
              label="Titulo do livro"
              type="text"
              id="bookFormTitle"
              name="title"
              onChange={handleChange}
              value={bookData.title}
              required
              readOnly={loading}
            />
          </div>

          <div>
            <FormField
              className="form-control"
              label="Autor(a)"
              type="text"
              id="bookFormAuthor"
              name="author"
              onChange={handleChange}
              value={bookData.author}
              required
              readOnly={loading}
            />
          </div>

          <div>
            <FormField
              className="form-control"
              label="Sinopse"
              id="bookForSynopsis"
              name="synopsis"
              onChange={handleChange}
              value={bookData.synopsis}
              readOnly={loading}
            />
          </div>

          <div>
            <FormField
              className="form-control"
              type="number"
              label="Ano do Livro"
              id="bookForYear"
              name="releaseYear"
              onChange={handleChange}
              value={bookData.releaseYear}
              readOnly={loading}
            />
          </div>

          <div>
            <FormField
              className="form-control"
              type="text"
              label="Gênero"
              id="bookForGenre"
              name="genre"
              onChange={handleChange}
              value={bookData.genre}
              required
              readOnly={loading}
            />
          </div>

          <div>
            <FormField
              className="form-control"
              label="Imagem"
              type="file"
              id="bookForPicture"
              name="coverImage"
              onChange={handleChange}
              readOnly={loading}
            />
          </div>
          <br></br>
          <div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary"
            >
              {loading ? (
                <>
                  {" "}
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  <span>Carregando</span>{" "}
                </>
              ) : (
                "Enviar"
              )}
            </button>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
