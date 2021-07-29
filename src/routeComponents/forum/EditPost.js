import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//import { useHistory } from "react-router";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function EditPost() {
  const [state, setState] = useState({
    title: "",
    description: "",
    link: "",
    pictureUrl: "",
    tags: "Saúde",
  });

  const { id, country } = useParams();
  const history = useHistory();
  useEffect(() => {
    async function fetchEditPost() {
      try {
        const response = await api.get(`/${country}/forum/${id}`);

        const { _id, ...rest } = response.data;

        setState({ ...rest });
      } catch (err) {
        console.error(err);
      }
    }
    fetchEditPost();
  }, []);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.put(`/${country}/forum/${id}`, {
        ...state,
        tags: state.tags.toLowerCase(),
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
    <div className="container mt-5">
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
          type="text"
          label="Url Imagem:"
          name="pictureUrl"
          onChange={handleChange}
          value={state.pictureUrl}
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
          <button className="btn btn-primary mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
