import { useState } from "react";
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function CreatePostForum() {
  const [state, setState] = useState({
    title: "",
    description: "",
    link: "",
    pictureUrl: "",
    tags: "Saúde",
  });

  const history = useHistory();
  const { country } = useParams();

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleFileUpload(file) {
    const uploadData = new FormData();

    uploadData.append("profilePicture", file);

    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const uploadImage = await handleFileUpload(state.pictureUrl);
      console.log(uploadImage);
      const response = await api.post(`/${country}/forum`, {
        ...state,
        tags: state.tags.toLowerCase(),
        pictureUrl: uploadImage,
      });
      setState({
        title: "",
        description: "",
        link: "",
        pictureUrl: "",
        tags: "",
      });

      history.push(`/${country}/forum`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className="heroImageCreate"></div>
      <hr className="docHr mt-5" />
      <div className="container mt-5 allPage">
        <Link
          to={`/${country}/forum`}
          style={{ color: "#F7B633", textDecoration: "none" }}
          className="mt-5"
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>
        <h3 className="mt-5">Adicione uma publicação:</h3>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            label="Título:"
            name="title"
            onChange={handleChange}
            value={state.title}
          />

          <SelectInput
            label="Selecione uma categoria: "
            name="tags"
            onChange={handleChange}
            value={state.tags}
            items={[
              "Saúde",
              "Impostos",
              "Estudos",
              "Bancos",
              "Moradia",
              "Empregos",
              "Negócios",
              "Doações",
              "Vistos",
              "Dicas",
            ]}
          />
          <TextInput
            label="Imagem"
            type="file"
            name="pictureUrl"
            id="signupFormPictureUrl"
            onChange={handleChange}
          />

          <TextInput
            type="text"
            label="Link para divulgação:"
            name="link"
            onChange={handleChange}
            value={state.link}
          />

          <div>
            <label>Descrição</label>
            <textarea
              className="form-control"
              aria-label="Descrição"
              name="description"
              onChange={handleChange}
              value={state.description}
            ></textarea>
          </div>

          <div className="form-group">
            <button
              className="btn yellowTaxi mt-3"
              type="submit"
              style={{ color: "white" }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForum;
