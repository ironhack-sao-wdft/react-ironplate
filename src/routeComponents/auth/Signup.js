import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import "../auth/Signup.css";

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    lastName: null,
    email: null,
    password: null,
    profileImage: null,
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
    <form onSubmit={handleSubmit}>
      <h1>Signup!</h1>

      <div>
        <label htmlFor="signupFormName">Name</label>
        <input
          type="text"
          name="name"
          id="signupFormName"
          placeholder="Your name here"
          style={{ fontFamily: "sans serif" }}
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormLastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="signupFormLastName"
          placeholder="Your last name here"
          style={{ fontFamily: "sans serif" }}
          value={state.lastName}
          error={errors.lastName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          placeholder="Your e-mail address here"
          style={{ fontFamily: "sans serif" }}
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
          placeholder="********"
          style={{ fontFamily: "sans serif" }}
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormProfileImage">Profile Image</label>
        <input
          type="text"
          name="profileImage"
          id="signupFormProfileImage"
          placeholder="Your profile image here"
          //style={{fontFamily: "sans serif"}}
          value={state.profileImage}
          error={errors.profileImage}
          onChange={handleChange}
        />
      </div>

      <div>
        <button
          type="submit"
          className="btn"
          style={{ fontFamily: "sans serif" }}
        >
          Signup!
        </button>

        <Link to="/auth/login" className="backtologin">
          Already have an account? Click here to login.
        </Link>
      </div>
    </form>
  );
}

export default Signup;
