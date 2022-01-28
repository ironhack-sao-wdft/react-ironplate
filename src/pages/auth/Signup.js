import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import Navbar from "../../components/Navbar";
import "../../assets/styles/signup.css";
import { AuthContext } from "../../contexts/authContext";

function Signup(props) {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
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
      setLoading(false);
      const response = await api.post("/api/signup", state);
      setLoading(true);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <div className="container">
        <h1 className="text">Crie sua conta</h1>
        <div>
          <label htmlFor="signupName">Nome Completo</label>
          <div className="formName">
            <input
              type="text"
              name="name"
              id="signupFormName"
              value={state.name}
              error={errors.name}
              onChange={handleChange}
              readOnly={loading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signupFormEmail">Email</label>
          <div className="formEmail">
            <input
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
              readOnly={loading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signupFormPassword">Senha</label>
          <div className="formPassword">
            <input
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
              readOnly={loading}
            />
          </div>
        </div>

        <div className="buttonSubmit">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
