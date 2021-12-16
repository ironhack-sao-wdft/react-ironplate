import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <div className="entry-card m-4 shadow-lg p-1 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <label htmlFor="signupFormName" />
          <input
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            error={errors.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div className="p-2">
          <label htmlFor="signupFormEmail" />
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
            placeholder="Your e-mail"
          />
        </div>

        <div className="p-2">
          <label htmlFor="signupFormPassword" />
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
            placeholder="Your password"
          />
        </div>

        <div className="p-4">
          <button
            className="btn btn-light btn-lg"
            type="submit"
            style={{ color: "#965353" }}
          >
            Signup
          </button>
        </div>
        <div className="p-4">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <p>Already have an account?</p>
            <p> Click here to login!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
