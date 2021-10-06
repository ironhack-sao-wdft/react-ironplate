import React, { useState } from "react";
import api from "../apis/api";
import "../assets/styles/ImageUpload.css";

function ImageUpload() {
  const [state, setState] = useState({
    caption: "",
    image: "",
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
      const pictureUrl = await handleUpload(state.image);
      const response = await api.post("/upload", {
        ...state,
        image: pictureUrl,
      });
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="caption"
          value={state.caption}
          onChange={handleChange}
          className="form_text"
          placeholder="Add your description"
        />
        <input
          type="file"
          name="image"
          id="upload"
          value=""
          onChange={handleChange}
          className="form_file"
          file="Select your photo"
        />
        <label htmlFor="upload">
          <i className="fa-solid fa-circle-plus"></i>
        </label>
        <button type="sumbit" className="form_button">
          <i className="fa-solid fa-camera"></i>
          <> Capture! </>
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
