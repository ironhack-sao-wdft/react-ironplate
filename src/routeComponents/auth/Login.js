import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";


import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
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
      setErrors({ password: "", email: "" });
      props.history.push("/book/all");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div style={{backgroundColor: "#fffdf0"}}>
      <form className="container md-me-5 mt-5" onSubmit={handleSubmit}>
        <h1 className="pt-4">Login</h1>
        <hr />

        <div className="form-group mt-4">
          <label htmlFor="signupFormEmail" className="form-label mt-3">E-mail</label>
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

        <div className="form-group mt-4">
          <label htmlFor="signupFormPassword" className="form-label">Senha</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="signupFormPassword"
            placeholder="********"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-4">
          <button className="btn btn-primary" type="submit">Entrar</button>

        </div>

        <div className="mt-3 pb-5">
        <Link 
            to="/auth/signup"

          >
            Não possui uma conta? Clique aqui para criar.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
