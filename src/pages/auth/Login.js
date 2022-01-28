import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../../components/Form/FormField";
import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("http://localhost:4000/api/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Entre na sua conta</h1>

          <div>
            <FormField
              label="Email"
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormField
              label="Senha"
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mr-3">
              Entrar
            </button>
            <div>
              <Link className="btn btn-primary " to="/signup">
                Não tem uma conta? Clique aqui e cadastre!
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
