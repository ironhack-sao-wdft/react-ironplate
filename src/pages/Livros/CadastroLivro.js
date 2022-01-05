import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import api from "../../apis/api";

function CadastrarLivro() {

  const [livro, setLivro] = useState({
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
    if (e.target.files) {
      return setLivro({
        ...livro,
        [e.target.name]: e.target.files[0],
      });
    }

    setLivro({ ...livro, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/cadastrar-livro", {
        ...livro,
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
      <Navbar />
      <div className="container bg-danger d-flex justify-content-center w-50 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="titulo">
            <h1>Cadastro</h1>
          </div>
          {/* campo do titulo */}
          <div className="input-group mb-3 ">
            <label htmlFor="livroFormTitulo" className="mr-3">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={livro.title}
              required
              readOnly={loading}
            />
          </div>

          {/* campo do Author */}
          <div className="input-group mb-3">
            <label htmlFor="livroFormAuthor" className="mr-3">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              value={livro.author}
              required
              readOnly={loading}
            />
          </div>

          {/* campo sinopse do livro */}
          <div className="input-group mb-3">
            <div>
              <label htmlFor="livroFormSynopsis" className="mr-3">
                Sinopse
              </label>
            </div>
            <input
              type="text"
              id="synopsis"
              name="synopsis"
              onChange={handleChange}
              value={livro.synopsis}
              required
              readOnly={loading}
            />
          </div>

          {/* campo Ano do livro */}
          <div className="input-group mb-3">
            <label htmlFor="livroFormAno" className="mr-3">
              Ano
            </label>
            <input
              id="releaseYear"
              name="releaseYear"
              onChange={handleChange}
              value={livro.releaseYear}
              required
              readOnly={loading}
            />
          </div>

          {/* campo Gênero do livro */}
          <div className="input-group mb-3">
            <label htmlFor="livroFormGenero" className="mr-3">
              Genero
            </label>

            <input
              id="genre"
              name="genre"
              onChange={handleChange}
              value={livro.genre}
              required
              readOnly={loading}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="file"
              name="coverImage"
              className="form-control"
              id="inputGroupFile02"
            />
            <label className="input-group-text" for="inputGroupFile02">
              Imagem
            </label>
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
                "Cadastrar "
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CadastrarLivro;
