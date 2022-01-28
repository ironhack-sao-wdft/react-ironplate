import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/api"


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
      const response = await api.post("/login", state);
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
      setErrors({ ...err.response.data.errors});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Login</h1>

      <div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          className="form-control"
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
          className="form-control"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div>
        <button type="submit" className="btn btn-primary">Login!</button>
        <br></br>
        <Link to="/signup">Don't have an account? Click here to signup!</Link>
      </div>
    </form>
  );
}

export default Login; 
