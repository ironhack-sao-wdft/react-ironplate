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
    image: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    lastName: null,
    email: null,
    password: null,
    image: null,
  });

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleFileUpload(file) {
    const uploadData = new FormData();
    uploadData.append("profilePicture", file);
    const response = await api.post("/upload", uploadData);
    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const profilePictureUrl = await handleFileUpload(state.image);

      const response = await api.post("/signup", {
        ...state,
        image: profilePictureUrl,
      });
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
        <label htmlFor="signupFormProfilePicture">Profile Image</label>
        <input
          type="file"
          name="image"
          id="signupFormProfilePicture"
          placeholder="Your profile image here"
          error={errors.image}
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
