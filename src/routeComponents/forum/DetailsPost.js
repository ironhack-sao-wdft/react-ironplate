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

  const { id } = useParams();
  const history = useHistory();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        //console.log(id);
        const response = await api.get(`/forum/${id}`);
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
      const response = await api.delete(`/forum/${id}`);

      history.push(`/forum`);
    } catch (err) {
      console.error(err.response);
    }
  };

  //----------------------- COMENTÁRIOS

  // postar comentário
  const handleSubmit = async (event) => {
    //console.log("oi");
    try {
      const response = await api.post(`/forum/${id}/comments`, comment);
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
      const response = await api.delete(`/forum/${commentId}/comments`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div>
      <div
        className="mt-5 ml-5 "
        style={{ maxHeight: "40vh", maxWidth: "60vw" }}
      >
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src={post.pictureUrl}
              className="card-img "
              alt="..."
              style={{ maxHeight: "20vh" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body " style={{ maxHeight: "30vh" }}>
              <h5 className="card-title ">{post.title}</h5>
              <p className="card-text post-description">{post.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {post.tags.toLocaleUpperCase()}
                </small>
              </p>
            </div>
          </div>

          <button className="btn btn-primary mb-3">
            <Link to={`/edit-forum/${post._id}`} className="linksTextWhite">
              Editar
            </Link>
          </button>
          <button className="btn btn-danger" onClick={handlePostDelete}>
            Excluir
          </button>
          <div className="mt-5">
            {" "}
            <textarea value={comment.description} onChange={handleChange}>
              {post.answersId}
            </textarea>
            <button className="btn btn-success" onClick={handleSubmit}>
              Comentar
            </button>
          </div>
        </div>
        <hr />
      </div>

      {post.answersId.map((comentario) => {
        return (
          <div>
            <div className="row no-gutters">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{comentario.name}</h5>
                  <p className="card-text">{comentario.description}</p>

                  <p className="card-text">
                    <small className="text-muted">{comentario.tags}</small>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(comentario._id)}
            >
              {" "}
              Deletar
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default DetailsPost;
