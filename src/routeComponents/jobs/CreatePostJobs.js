import { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";

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
  const history = useHistory();

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
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

      history.push(`/${country}/emprego`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="allPage">
      <div className="heroImageAddEmprego"></div>
      <hr className="docHr mt-5" />
      <div className="container mt-5 ">
        <Link
          to={`/${country}/emprego`}
          style={{ color: "#F7B633", textDecoration: "none" }}
          className="mt-5"
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>
        <h3 className="mb-5">Cadastre uma oportunidade de emprego:</h3>

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
            name="company"
            onChange={handleChange}
            value={state.company}
          />

          <TextInput
            type="text"
            label="Salário:"
            name="salary"
            onChange={handleChange}
            value={state.salary}
          />

          <TextInput
            type="text"
            label="Link:"
            name="Url"
            onChange={handleChange}
            value={state.Url}
          />

          <TextInput
            type="text"
            label="País:"
            name="country"
            onChange={handleChange}
            value={state.country}
          />

          <TextInput
            type="text"
            label="Cidade:"
            name="city"
            onChange={handleChange}
            value={state.city}
          />

          <TextInput
            type="text"
            label="Telefone:"
            name="phone"
            onChange={handleChange}
            value={state.phone}
          />

          <TextInput
            type="text"
            label="E-mail:"
            name="companyEmail"
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
export default CreatePostJobs;
