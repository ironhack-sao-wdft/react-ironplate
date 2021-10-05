import { useState, useEffect, useContext } from "react";
import api from "../apis/api";
import "../assets/styles/Post.css";
import Avatar from "@material-ui/core/Avatar";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../contexts/authContext";
import ImageUpload from "./ImageUpload";
import { Modal, Button } from "react-bootstrap";

function Post() {
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { loggedInUser } = useContext(AuthContext);
  const [stateComment, setStateComment] = useState({
    description: "",
    postId: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get("/sync");
        setPostDetails([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [setLoading]);

  function handleChange(event) {
    setStateComment({
      ...stateComment,
      [event.target.name]: event.target.value,
      postId: event.target.id,
    });
  }

  async function handleSubmit(event) {
    try {
      setLoading(true);
      const response = await api.post("/addComment", {
        ...stateComment,
      });
      console.log(response.data);
      // Limpando o formulário após a criação
      setStateComment({
        description: "",
        postId: "",
      });
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
      window.location.reload();
    }
  }

  async function handleClickDelete(event) {
    try {
      setLoading(true);
      const response = await api.delete(`/deleteComment/${event.target.id}`, {
        ...stateComment,
      });
      console.log(response.data);
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleClickEdit(event) {
    handleShow();
    setStateComment({
      ...stateComment,
      _id: event.target.id,
    });
  }

  async function handleSubmitEdit() {
    try {
      setLoading(true);
      handleClose()
      const response = await api.patch(`/editComment/${stateComment._id}`, {
        description: stateComment.description
      });
      console.log(response.data);
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="postOverview">
          {postDetails
            .map((obj) => {
              return (
                <div key={obj._id} className="post">
                  <div className="post_header">
                    <Avatar
                      className="post_avatar"
                      alt={obj.userOwner[0].name}
                      src={obj.userOwner[0].pictureUrl}
                    />
                    <h6>{obj.userOwner[0].name}</h6>
                  </div>
                  <img className="post_image" src={obj.image} alt="fotoPost" />
                  <h6 className="post_text">
                    <strong>{obj.userOwner[0].name}:</strong>
                    {obj.caption}
                  </h6>
                  <hr />
                  <div>
                    {obj.comments.map((comment) => {
                      return (
                        <h6 key={comment._id} className="post_subtext">
                          <strong>{comment.author}:</strong>
                          {comment.description}
                          {loggedInUser.user._id === comment.commentOwner ? (
                            <>
                              <button
                                className="btn_delete"
                                id={comment._id}
                                onClick={handleClickDelete}
                                type="button"
                              >
                                <i className="fa-solid fa-trash"></i>
                                <> Delete </>
                              </button>
                              <Button
                                variant="primary"
                                id={comment._id}
                                onClick={handleClickEdit}
                                type="button"
                              >
                                Edit
                              </Button>{" "}
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Edit you comment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <input
                                    type="text"
                                    name="description"
                                    onChange={handleChange}
                                    id={comment._id}
                                  />
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                    type="button"
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="primary"
                                    onClick={handleSubmitEdit}
                                    type="button"
                                  >
                                    Save Changes
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </>
                          ) : null}
                        </h6>
                      );
                    })}
                    {!loggedInUser ? null : (
                      <form className="post_comments" onSubmit={handleSubmit}>
                        <input
                          className="post_form"
                          type="text"
                          placeholder="Add a comment..."
                          onChange={handleChange}
                          id={obj._id}
                          name="description"
                        />
                        <button className="post_button" type="submit">
                          Post
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      )}
      <ImageUpload />
    </>
  );
}

export default Post;
