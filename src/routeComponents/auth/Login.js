import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TextInput from "../../components/TextInput";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  console.log("CONTEXT => ", authContext);

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
      const response = await axios.post(
        "http://localhost:1234/api/login",
        state
      );
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/book/all");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <TextInput
        type="email"
        label="E-mail Address"
        name="email"
        id="signupFormEmail"
        value={state.email}
        error={errors.email}
        onChange={handleChange}
      />

      <TextInput
        type="password"
        label="Password"
        name="password"
        id="signupFormPassword"
        value={state.password}
        error={errors.password}
        onChange={handleChange}
      />

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Login!
        </button>

        <Link to="/auth/signup">
          Don't have an account? Click here to signup!
        </Link>
      </div>
    </form>
  );
}

export default Login;
