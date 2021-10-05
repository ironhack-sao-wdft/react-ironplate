import React, { useState } from "react";
import api from "../apis/api";

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
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          name="caption"
          value={state.caption}
          onChange={handleChange}
          className=""
        />
        <input type="file" name="image" onChange={handleChange} className=""/>
        <button type="sumbit" className="">Capture!</button>
      </form>
    </div>
  );
}

export default ImageUpload;
