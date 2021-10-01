import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    picture: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    picture: null,
  });

  function handleChange(event) {
    //Verificar se estamos no input de arquivo para pegar o campo correto
    if (event.target.files) {
      return setState({
        ...state,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  
    //TESTE --------------------------------------------------------------------------------------------------------
    console.log(event.target.files);
    console.log(state);
    //--------------------------------------------------------------------------------------------------------------
  }

  async function handleUpload(file) {
    const uploadData = new FormData();
    uploadData.append("picture", file);
    const response = await api.post("/image-upload", uploadData);
    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const pictureUrl = await handleUpload(state.picture);
      const response = await api.post("/signup", { ...state, pictureUrl });
      setErrors({ name: "", password: "", email: "", picture: "" });
      props.history.push("/book/all");
      console.log(response);
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container d-flex justify-content-center align-itens-center">
      <form onSubmit={handleSubmit}>
        <h1>Signup!</h1>
        <br />
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
        <br />
        <div>
          <label htmlFor="signupFormPicture">Your picture</label>
          <input
            type="file"
            name="picture"
            id="signupFormPicture"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary btn-lg rounded-pill" type="submit">
          Signup!
        </button>
        <br />
        <Link to="/auth/login">
          Already have an account? Click here to login.
        </Link>
        <br />
      </form>
    </div>
  );
}

export default Signup;
