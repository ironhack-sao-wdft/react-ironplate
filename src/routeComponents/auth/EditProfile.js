import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

function EditProfile(props) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    lastName: null,
    image: null,
  });
  useEffect(() => {
    async function fecthUser() {
      try {
        const user = await api.get("/profile");
        setState({
          name: user.data.name,
          lastName: user.data.lastName,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fecthUser();
  }, []);
  function handleChange(event) {
    // if (event.target.files) {
    //   return setState({
    //     ...state,
    //     [event.currentTarget.name]: event.currentTarget.files[0],
    //   });
    // }
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  // async function handleFileUpload(file) {
  //   const uploadData = new FormData();
  //   uploadData.append("profilePicture", file);
  //   const response = await api.post("/upload", uploadData);
  //   return response.data.url;
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // const profilePictureUrl = await handleFileUpload(state.image);

      const response = await api.put("/profile/edit", {
        ...state,
        // image: profilePictureUrl,
      });
      setErrors({ name: "" });
      props.history.push("/profile");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response });
    }
  }

  return (
    <div style={{ backgroundColor: "#fffdf0" }}>
      <form onSubmit={handleSubmit} className="container md-me-5 mt-5">
        <h1 className="pt-4">Editar perfil</h1>
        <hr />

        <div className="form-group">
          <label htmlFor="signupFormName" className="form-label mt-3">
            Nome{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="signupFormName"
            placeholder="Seu nome aqui"
            style={{ fontFamily: "sans serif" }}
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="signupFormLastName" className="form-label mt-3">
            Sobrenome{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="signupFormLastName"
            placeholder="Seu sobrenome aqui"
            style={{ fontFamily: "sans serif" }}
            value={state.lastName}
            error={errors.lastName}
            onChange={handleChange}
          />
        </div>

        {/* <div>
          <label htmlFor="signupFormProfilePicture" className="form-label mt-3">
            Imagem de perfil
          </label>
          <input
            className="form-control"
            type="file"
            name="image"
            id="signupFormProfilePicture"
            placeholder="Your profile image here"
            error={errors.image}
            onChange={handleChange}
          />
        </div> */}

        <div className="mt-5 pb-5">
          <button type="submit" className="btn btn-primary">
            Concluir
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
