import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";

function DetailsPost() {
  const [post, setPosts] = useState({
    title: "",
    description: "",
    link: "",
    pictureUrl: "",
    tags: "",
    answersId: [],
  });

  const [comment, setComment] = useState({
    description: " ",
  });

  const [commentsSize, setCommentsSize] = useState(post.answersId.length);

  const { id, country } = useParams();
  const history = useHistory();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`/${country}/forum/${id}`);
        setCommentsSize(response.data.answersId.length);
        setPosts({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [id, post.answersId.length]);

  const handlePostDelete = async (event) => {
    try {
      const response = await api.delete(`/${country}/forum/${id}`);

      history.push(`/${country}/forum`);
    } catch (err) {
      console.error(err.response);
    }
  };

  //----------------------- COMENTÁRIOS

  // postar comentário
  const handleSubmit = async (event) => {
    //console.log("oi");
    try {
      const response = await api.post(
        `/${country}/forum/${id}/comments`,
        comment
      );
    } catch (err) {
      console.error(err.response);
    }
  };

  const handleChange = (event) => {
    setComment({ description: event.target.value });
  };

  // deletar comentário
  const handleDelete = async (commentId) => {
    console.log(commentId);
    try {
      const response = await api.delete(
        `/${country}/forum/${commentId}/comments`
      );

      history.push(`/${country}/forum/${commentId}`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="allPage">
      <div
        className="container mt-5 "
        style={{ maxHeight: "60vh", maxWidth: "90vw" }}
      >
        <Link
          to={`/${country}/forum`}
          style={{ color: "#F7B633", textDecoration: "none" }}
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>
        <h3 className="card-title ml-5 mt-5">{post.title}</h3>
        <hr className="titleHr mb-5 " />

        <div className="d-flex justify-content-center">
          <div className="col-md-3 cardImgPost">
            <img
              src={post.pictureUrl}
              className="card-img "
              alt="..."
              style={{ maxHeight: "40vh" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body " style={{ maxHeight: "40vh" }}>
              <p>{post.link}</p>
              <p className="card-text post-description">{post.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {post.tags.toLocaleUpperCase()}
                </small>
              </p>
            </div>
          </div>

          <div>
            {" "}
            <button
              className="botao mb-3"
              style={{ backgroundColor: "#5893D4" }}
            >
              <Link
                to={`/${country}/edit-forum/${post._id}`}
                className="linksTextWhite"
              >
                Editar
              </Link>
            </button>
            <button
              className="botao "
              style={{ backgroundColor: "#EB4C41" }}
              onClick={handlePostDelete}
            >
              Excluir
            </button>{" "}
          </div>
        </div>
      </div>
      <hr className="docHr" />

      <div className="container mt-3 cardComments">
        <div className="row">
          <textarea
            className="text-area mt-4 col my-1 mr-sm-2"
            value={comment.description}
            onChange={handleChange}
          >
            {post.answersId}
          </textarea>
          <button
            className="botao mt-5"
            style={{ backgroundColor: "#1F3C88" }}
            onClick={handleSubmit}
          >
            Comentar
          </button>
        </div>

        <div>
          <i className="far fa-comments fa-2x iconComment mt-5"></i>
          <h4 className="commentTitle ">Comentários:</h4>
        </div>

        {post.answersId.map((comentario) => {
          return (
            <div>
              <div className="card mt-3 row no-gutters">
                <div className="col-md-4 mt-4">
                  <div className="col-md-8 ">
                    <div className="card-body  ">
                      <h5 className="card-title">{comentario.name}</h5>
                      <p className="card-text">{comentario.description}</p>

                      <p className="card-text">
                        <small className="text-muted">{comentario.tags}</small>
                      </p>
                      <button
                        className="botao deleteComments"
                        style={{ backgroundColor: "#EB4C41" }}
                        onClick={() => handleDelete(comentario._id)}
                      >
                        {" "}
                        Deletar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DetailsPost;
