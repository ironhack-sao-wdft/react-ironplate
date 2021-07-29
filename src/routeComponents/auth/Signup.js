import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    lastName: null,
    email: null,
    password: null,
    image: null,
  });

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
      const profilePictureUrl = await handleFileUpload(state.image);

      const response = await api.post("/signup", {
        ...state,
        image: profilePictureUrl,
      });
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div style={{ backgroundColor: "#fffdf0" }}>
      <form onSubmit={handleSubmit} className="container md-me-5 mt-5">
        <h1 className="pt-4">Cadastro</h1>
        <hr />

        <div className="form-group">
          <label htmlFor="signupFormName" className="form-label mt-3">
            Nome{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="signupFormName"
            placeholder="Seu nome aqui"
            style={{ fontFamily: "sans serif" }}
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="signupFormLastName" className="form-label mt-3">
            Sobrenome{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="signupFormLastName"
            placeholder="Seu sobrenome aqui"
            style={{ fontFamily: "sans serif" }}
            value={state.lastName}
            error={errors.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="signupFormEmail" className="form-label mt-3">
            E-mail{" "}
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="signupFormEmail"
            placeholder="Seu e-mail aqui"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="signupFormPassword" className="form-label mt-3">
            Senha{" "}
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="signupFormPassword"
            placeholder="8 dígitos, sendo no mínimo 1 letra maícula, 1 número e um caracter especial"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="signupFormProfilePicture" className="form-label mt-3">
            Imagem de perfil
          </label>
          <input
            className="form-control"
            type="file"
            name="image"
            id="signupFormProfilePicture"
            placeholder="Your profile image here"
            error={errors.image}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Cadastrar!
          </button>
        </div>

        <div className="mt-3 pb-5">
          <Link to="/auth/login">
            Já possui uma conta? Clique aqui para entrar.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
