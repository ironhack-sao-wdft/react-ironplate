import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import TextInput from "../../components/TextInput";

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    profilePictureUrl: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState(null);

  function handleChange(event) {
    if (event.target.files) {
      setState({
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

    uploadData.append("profilePictureUrl", file);

    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const profilePicture = await handleFileUpload(state.profilePictureUrl);

      const response = await api.post("/signup", {
        ...state,
        profilePicture,
      });
      setState({
        name: "",
        password: "",
        email: "",
        profilePictureUrl: "",
        country: "",
        city: "",
      });
      setErrors(null);
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      // setErrors({ ...err.response.data.errors });
    }
  }
  console.log(state);

  return (
    <div className="container mt-5 margin-footer">
      <form onSubmit={handleSubmit}>
        <h1 className=" mb-4 fontElefant">Cadastro</h1>

        <TextInput
          type="text"
          label="Nome"
          name="name"
          value={state.name}
          error={errors}
          onChange={handleChange}
          required
        />

        <TextInput
          type="email"
          label="E-mail"
          name="email"
          value={state.email}
          error={errors}
          onChange={handleChange}
          required
        />

        <TextInput
          type="password"
          label="Senha"
          name="password"
          value={state.password}
          error={errors}
          onChange={handleChange}
          required
        />

        <TextInput
          type="country"
          label="País"
          name="country"
          value={state.country}
          error={errors}
          onChange={handleChange}
          required
        />

        <TextInput
          type="city"
          label="Cidade"
          name="city"
          value={state.city}
          error={errors}
          onChange={handleChange}
          required
        />
        <TextInput
          type="file"
          label="Foto"
          name="profilePictureUrl"
          value={state.profilePictureUrl}
          error={errors}
          onChange={handleChange}
        />

        <div className="mt-3">
          <button className="btn yellowTaxi fontWhite" type="submit">
            Cadastrar
          </button>
        </div>
        <Link to="/auth/login" className="align-self-center">
          <small>Já é cadastrado? Clique aqui.</small>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
