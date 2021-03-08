import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import "../Home.css";
import { Button } from "react-bootstrap";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="general-text container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up!</h1>
        <div className="container mt-5">
          <div className="d-flex justify-content-between">
            <label htmlFor="signupFormName">Name</label>
            <input
              type="text"
              name="name"
              id="signupFormName"
              value={state.name}
              error={errors.name}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="signupFormEmail">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="signupFormEmail"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
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
              variant="light outline-light"
              type="submit"
              style={{ width: 100, margin: 20 }}
            >
              Sign Up!
            </Button>

            <Link to="/auth/login">
              Already have an account? Click here to login.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
