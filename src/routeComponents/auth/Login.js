import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import "../Home.css";
import { Button } from "react-bootstrap";

import { AuthContext } from "../../contexts/authContext";

// document.body.style.backgroundColor = red;

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
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

      props.history.push("/");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="general-text">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="container mt-5">
          <div className="d-flex justify-content-between m-1">
            <label htmlFor="signupFormEmail">E-mail</label>
            <input
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between m-1">
            <label htmlFor="signupFormPassword">Password</label>
            <input
              type="password"
              name="password"
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-column align-items-center">
            <Button
              variant="light"
              type="submit"
              style={{ width: 100, margin: 20 }}
            >
              Login!
            </Button>

            <Link to="/auth/signup">
              Don't have an account? Click here to sign up!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
