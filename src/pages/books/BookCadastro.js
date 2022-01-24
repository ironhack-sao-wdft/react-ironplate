import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../../components/formulários/FormField";

function BookCadastro() {
  const [book, setbook] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: "",
    genre: "",
    picture: new File([], ""),
    coverImage: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.files) {
      return setbook({
        ...book,
        [e.target.name]: e.target.files[0],
      });
    }
    setbook({ ...book, [e.target.name]: e.target.value });
  }

  //Upload de arquivo
  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await api.post("/upload", uploadData);
      console.log(response);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const coverImage = await handleFileUpload(book.picture);
      const response = await api.post("/book-cadastro", {
        ...book,
        coverImage,
      });
      navigate("/");
      console.log(response);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <div className="container cadastro">
          <form onSubmit={handleSubmit}>
            <div className="titulo">
              <h1>Novo Livro</h1>
            </div>

            {/* Título */}
            <div className=" mb-3 ">
              <FormField
                label="Título"
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                value={book.title}
                required
                readOnly={loading}
              />
            </div>

            {/* Author */}
            <div className=" mb-3">
              <FormField
                label="Autor"
                type="text"
                id="author"
                name="author"
                onChange={handleChange}
                value={book.author}
                required
                readOnly={loading}
              />
            </div>

            {/* Sinopse */}
            <div className=" mb-3">
              <FormField
                label="Sinopse"
                type="text"
                id="synopsis"
                name="synopsis"
                onChange={handleChange}
                value={book.synopsis}
                required
                readOnly={loading}
              />
            </div>

            {/* Ano */}
            <div className="mb-3">
              <FormField
                label="Ano"
                id="releaseYear"
                name="releaseYear"
                onChange={handleChange}
                value={book.releaseYear}
                required
                readOnly={loading}
              />
            </div>

            {/* Gênero */}
            <div className=" mb-3">
              <FormField
                label="Gênero"
                id="genre"
                name="genre"
                onChange={handleChange}
                value={book.genre}
                required
                readOnly={loading}
              />
            </div>

            <div class=" mb-3">
              <FormField
                type="file"
                label="Imagem"
                id="productFormPicture"
                name="picture"
                onChange={handleChange}
                readOnly={loading}
              />
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="btn-primary mb-3"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    <span>Carregando...</span>{" "}
                  </>
                ) : (
                  "Cadastrar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookCadastro;