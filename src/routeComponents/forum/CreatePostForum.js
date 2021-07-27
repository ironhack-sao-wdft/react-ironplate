import { useState } from "react";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import axios from "axios";

function CreatePostForum() {
  const [state, setState] = useState({
    title: "",
    description: "",
    link: "",
    pictureUrl: "",
    tags: "Dica",
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      //const response = await axios.post("http://localhost:4000/forum", state);
      console.log(state);
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

export default CreatePostForum;
