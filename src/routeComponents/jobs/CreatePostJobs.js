import { useState } from "react";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import axios from "axios";
import { useParams } from "react-router-dom";

function CreatePostJobs() {
  const [state, setState] = useState({
    title: "",
    Url: "",
    description: "",
    phone: "",
    company: "",
    companyEmail: "",
    salary: "",
    country: "",
    city: "",
  });

  const { country } = useParams();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post(`/${country}/emprego`, {
        ...state,
      });
      setState({
        title: "",
        Url: "",
        description: "",
        phone: "",
        company: "",
        companyEmail: "",
        salary: "",
        country: "",
        city: "",
      });
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

        <TextInput
          type="text"
          label="Empresa:"
          name="title"
          onChange={handleChange}
          value={state.company}
        />

        <TextInput
          type="text"
          label="Salário:"
          name="title"
          onChange={handleChange}
          value={state.salary}
        />

        <TextInput
          type="text"
          label="Link:"
          name="title"
          onChange={handleChange}
          value={state.Url}
        />

        <TextInput
          type="text"
          label="País:"
          name="title"
          onChange={handleChange}
          value={state.country}
        />

        <TextInput
          type="text"
          label="Cidade:"
          name="title"
          onChange={handleChange}
          value={state.city}
        />

        <TextInput
          type="text"
          label="Telefone:"
          name="title"
          onChange={handleChange}
          value={state.phone}
        />

        <TextInput
          type="text"
          label="E-mail:"
          name="title"
          onChange={handleChange}
          value={state.companyEmail}
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

export default CreatePostJobs;
