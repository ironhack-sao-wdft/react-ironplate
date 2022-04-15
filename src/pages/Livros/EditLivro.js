import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../../apis/api";
// import FormField from "../../components/Form";
import FormField from "../../components/Form/FormField";

function EditLivro(props) {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: 0,
    genre: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  const { id } = useParams(props);

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/detalhe-livro/${id}`);

        setUserData({ ...userData, ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.patch(`/atualizar-livro/${id}`, userData);

      console.log(response);

      setLoading(false);

      navigate("/lista");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
      }
    }
  }

  return (
    <>
      <h1 className="text-center mt-5 mb-4">Editar Livro</h1>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <FormField
            label="Titulo"
            id="title"
            required
            name="title"
            onChange={handleChange}
            value={userData.title}
            readOnly={loading}
          />

          <FormField
            label="Autor"
            id="author"
            required
            name="author"
            onChange={handleChange}
            value={userData.author}
            readOnly={loading}
          />

          <FormField
            type="text"
            label="Synopsis"
            id="synopsis"
            required
            name="synopsis"
            onChange={handleChange}
            value={userData.synopsis}
            readOnly={loading}
          />
          <FormField
            type="number"
            label="Ano"
            id="releaseYear"
            required
            name="releaseYear"
            onChange={handleChange}
            value={userData.releaseYear}
            readOnly={loading}
          />
          <FormField
            type="text"
            label="Gênero"
            id="genre"
            required
            name="genre"
            onChange={handleChange}
            value={userData.genre}
            readOnly={loading}
          />

          <div className="container"></div>
          <div>
            <button disabled={loading} type="submit" className="botaoCriar">
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditLivro;
