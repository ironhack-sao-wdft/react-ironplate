import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import api from "../../apis/api";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";

function PostDetails(props) {
  const [state, setState] = useState({
    title: "",
    content: "",
    tripCost: "",
    pros: "",
    cons: "",
    image: "",
    comments: [],
    name: "",
    lastName: "",
    profilePicture: "",
  });

  const [comment, setComment] = useState({ content: "" });

  const history = useHistory();

  function handleChange(event) {
    setComment({
      ...comment,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(`/post/${state._id}/new-comment`, {
        ...comment,
      });
      history.go(0);

      //   props.history.push("/auth/login");
    } catch (err) {
      console.error(err);
    }
  }

  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const postResponse = await api.get(`/post/${id}`);

        console.log(postResponse);

        setState({
          ...postResponse.data,
          name: postResponse.data.userId.name,
          lastName: postResponse.data.userId.lastName,
          profilePicture: postResponse.data.userId.image,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <div style={{ backgroundColor: "#fffdf0" }}>
      <div className="container pb-5">
        <div className="my-5 py-5 mx-5">
          <div className="card mb-3" style={{ maxWidth: "50wv" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={state.image}
                  className="img-fluid rounded-start imagem"
                  alt="Destiny"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <img
                    src={state.profilePicture}
                    className="img-fluid rounded-circle mb-2 imagemProfile"
                    alt="profile pic"
                    style={{ maxWidth: "50px" }}
                  />
                  <strong className="card-title">
                    {state.name} {state.lastName}
                  </strong>
                  <h5 className="card-title">
                    <strong>Destino:</strong> {state.title}
                  </h5>
                  <p className="card-text">{state.content}</p>
                  <p className="card-text">
                    <strong>Prós: </strong> {state.pros}
                  </p>
                  <p className="card-text">
                    <strong>Contras: </strong>
                    {state.cons}
                  </p>
                  <p className="card-text">
                    <strong>Total gasto: </strong>
                    {state.tripCost}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{`${new Date(state.createdAt)
                      .getDay()
                      .toString()
                      .padStart(2, "0")}/${new Date(state.createdAt)
                      .getMonth()
                      .toString()
                      .padStart(2, "0")}/${new Date(
                      state.createdAt
                    ).getFullYear()}`}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="postFormContent">
              <strong>Novo comentário</strong>
            </label>
            <textarea
              className="form-control mt-3 mb-3"
              type="text"
              name="content"
              id="comment"
              value={comment.content}
              onChange={handleChange}
              rows="3"
            ></textarea>

            <button
              className=" self-align-right btn btn-primary mt-4 mb-5 "
              type="submit"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>

          <div>
            <strong>Comentários:</strong>
            <hr />
            <div>
              {state.comments.map((comment) => {
                return (
                  <>
                    <div>{comment.content}</div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
