import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import api from "../../apis/api";
import FormField from "../../components/formulários/FormField";

function BookEdit() {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    synopsis: "",
    releaseYear: "",
    genre: "",
    picture: new File([], ""),
    coverImage: "",
  });

  //Loading
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/detail-book/${id}`);
        const coverImage = await handleFileUpload(userData.picture);

        setUserData({ ...userData, 
        coverImage, 
        ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

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
      const response = await api.patch(`/update-book/${id}`,
        userData,
        coverImage
      );

      console.log(response);
      setLoading(false);

      navigate("/");
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
            value={userData.title}
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
            value={userData.author}
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
            value={userData.synopsis}
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
            value={userData.releaseYear}
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
          <button disabled={loading} type="submit" className="btn btn-primary">
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

export default BookEdit;