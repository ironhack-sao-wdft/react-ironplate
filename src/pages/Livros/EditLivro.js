import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import api from "../../apis/api";
import FormField from "../../components/Form/FormField";

function EditLivro(props) {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: "",
    genre: "",
    picture: new File([], ""),
    coverImage: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  
  const { id } =  useParams(props);

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/detalhe-livro/${id}`);
        const coverImage = await handleFileUpload(userData.picture);

        setUserData({ ...userData, coverImage, ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id, userData]);

  function handleChange(e) {
    if (e.target.files) {
      return setUserData({
        ...userData,
        [e.target.name]: e.target.files[0],
      });
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

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
      const coverImage = await handleFileUpload(userData.picture);

      const response = await api.patch(`/atualizar-livro/${id}`,{
       ...userData,
       coverImage
      });

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
    <div className="container cadastro">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titulos">Editar Livro</h1>

        {/* campo do titulo */}
        <div className=" mb-3 ">
          <FormField
            label="Título"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={userData.title}
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
            value={userData.author}
            required
            readOnly={loading}
          />
        </div>

        {/* campo sinopse do livro */}
        <div className=" mb-3">
          <FormField
            label="Sinopse"
            type="text"
            id="synopsis"
            name="synopsis"
            onChange={handleChange}
            value={userData.synopsis}
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
            value={userData.releaseYear}
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
            value={userData.genre}
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
        <div className="mb-3 text-end">
          <button
            disabled={loading}
            type="submit"
            className="btn btn-primary p-2"
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditLivro;


