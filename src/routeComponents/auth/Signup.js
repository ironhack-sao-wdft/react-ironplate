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
        <h1>Signup!</h1>

        <div>
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

        <div>
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

        <div>
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

        <div className="">
          <Button variant="light outline-light" type="submit">
            Sign Up!
          </Button>

          <Link to="/auth/login">
            Already have an account? Click here to login.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
