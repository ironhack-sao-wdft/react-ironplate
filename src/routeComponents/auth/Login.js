import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

import TextInput from "../../components/TextInput";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ passwordHash: "", email: "" });
  const [errors, setErrors] = useState(null);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors(null);
      props.history.push("/");
    } catch (err) {
      console.error(err.response);
      // setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Acesse sua conta</h1>

        <TextInput
          label="E-mail"
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          onChange={handleChange}
        />

        <TextInput
          label="Senha"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          onChange={handleChange}
        />

        {errors ? <div className="alert alert-danger">{errors}</div> : null}

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Entrar
          </button>
        </div>

        <Link className="pb-3" to="/auth/signup">
          Ainda não é cadastrado? Clique aqui para se cadastrar!
        </Link>
      </form>
    </div>
  );
}

export default Login;
