import React, { useState, useContext, useEffect } from "react";
import api from "../../apis/api";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

function EditPost(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({
    title: "",
    content: "",
    tripCost: "",
    pros: "",
    cons: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    title: null,
    content: null,
    tripCost: null,
    pros: null,
    cons: null,
    image: null,
  });
  const { id } = useParams();
  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await api.get(`/post/${id}`);
        setState({
          ...post.data,
          //   title: post.data.title,
          //   content: post.data.content,
          //   tripCost: post.data.tripCost,
          //   pros: post.data.pros,
          //   cons: post.data.cons,
          //   image: post.data.image,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);
  function handleChange(event) {
    // if (event.target.files) {
    //   return setState({
    //     ...state,
    //     [event.currentTarget.name]: //event.currentTarget.files[0],
    //   });
    // }
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  //   async function handleFileUpload(file) {
  //     const uploadData = new FormData();
  //     uploadData.append("image", file);
  //     const response = await api.post("/image-post-upload", uploadData);
  //     return response.data.url;
  //   }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      //   const imageUrl = await handleFileUpload(state.image);

      const response = await api.put(`/post/${id}`, { ...state });
      console.log(response);

      setErrors({
        title: "",
        content: "",
        tripCost: "",
        pros: "",
        cons: "",
        image: "",
      });
      props.history.push("/post");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response });
    }
  }

  return (
    <div style={{ backgroundColor: "#fffdf0" }}>
      <form className="container md-me-5 mt-5" onSubmit={handleSubmit}>
        <h1 className="pt-4">Editar Post</h1>
        <hr />

        <div className="form-group mt-4">
          <label htmlFor="postFormTitle">Destino</label>
          <input
            className="form-control"
            placeholder="País e cidade"
            type="text"
            name="title"
            id="postFormTitle"
            value={state.title}
            error={errors.title}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="postFormContent">Conte sobre sua viagem</label>
          <textarea
            className="form-control "
            type="text"
            name="content"
            id="signupFormContent"
            value={state.content}
            error={errors.content}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        <div className="row">
          <div className="col mt-3">
            <label htmlFor="postFormPros">Prós</label>
            <textarea
              className="form-control"
              type="text"
              name="pros"
              id="signupFormPros"
              value={state.pros}
              error={errors.pros}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col mt-3">
            <label htmlFor="postFormCons">Contras</label>
            <textarea
              className="form-control"
              type="text"
              name="cons"
              id="signupFormCons"
              value={state.cons}
              error={errors.cons}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="postFormTripCost">Valor total:</label>
          <input
            className="ml-2"
            placeholder="Valor e moeda"
            type="text"
            name="tripCost"
            id="postFormTripCost"
            value={state.tripCost}
            error={errors.tripCost}
            onChange={handleChange}
          />
        </div>

        {/*<div className="mt-3">
          <label htmlFor="postFormImage">Imagem:</label>
          <input
            className="ml-2"
            type="file"
            name="image"
            id="signupFormImage"
            error={errors.image}
            onChange={handleChange}
          />
  </div>*/}

        <div className="mt-3 pb-5">
          <button className="btn btn-primary mt-2" type="submit">
            Concluir
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
