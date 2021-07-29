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
      setState({ email: "", passwordHash: "" });
      // props.history.push("/");
    } catch (err) {
      console.error(err.response);
      // setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container mt-5 margin-footer">
      <form onSubmit={handleSubmit}>
        <div className="mt-5 mx-5 mb-0">
          <h5 className="mb-0">Acesse sua conta</h5>
          <small className="mt-0 mb-5">
            Ainda não tem cadastro? <Link to="/auth/signup">Clique aqui!</Link>
          </small>

          <div className="my-4 d-flex flex-column" id="login">
            <TextInput
              style={{ width: "40vw" }}
              className="form-control mb-3"
              placeholder="nome@email.com"
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
              <button className="btn yellowTaxi mt-3" type="submit">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
