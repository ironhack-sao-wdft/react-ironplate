import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../../components/Form/FormField"

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
      <div className="container cadastro">
        <form onSubmit={handleSubmit}>
          <div className="titulo">
            <h1>Cadastro</h1>
          </div>
          {/* campo do titulo */}
          <div className=" mb-3 ">
              <FormField
              label="Título"
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
          <div className=" mb-3">
            
            <FormField
            label="Author"
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
          <div className=" mb-3">
            <div>
            </div>
            <FormField
            label="Sinopse"
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
          <div className="mb-3">
           
            <FormField
            label="Ano"
              id="releaseYear"
              name="releaseYear"
              onChange={handleChange}
              value={livro.releaseYear}
              required
              readOnly={loading}
            />
          </div>

          {/* campo Gênero do livro */}
          <div className=" mb-3">
             <FormField
             label="Gênero"
              id="genre"
              name="genre"
              onChange={handleChange}
              value={livro.genre}
              required
              readOnly={loading}
            />
          </div>
          <div class=" mb-3">
            <FormField
            label="Imagem"
              type="file"
              name="coverImage"
              className="form-control"
              id="inputGroupFile02"
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
