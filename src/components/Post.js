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
    console.log(event.target.id);
    setShow(true)
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit you comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            id={event._id}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClickEdit}
            id={event.postId}
          >
            Save Changes
          </Button>
          <input value={event._id} />
        </Modal.Footer>
      </Modal>
    );
  }

  console.log(stateComment);

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
                  <div>
                    {obj.comments.map((comment) => {
                      return (
                        <h6 key={comment._id} className="post_text">
                          <strong>{comment.author}:</strong>
                          {comment.description}
                          {loggedInUser.user._id === comment.commentOwner ? (
                            <>
                              <button
                                className="btn btn-danger"
                                id={comment._id}
                                onClick={handleClickDelete}
                              >
                                Delete
                              </button>

                              <Button
                                variant="primary"
                                id={comment._id}
                                onClick={handleClickEdit}
                              >
                                Edit
                              </Button>
                            </>
                          ) : null}
                        </h6>
                      );
                    })}
                    {!loggedInUser ? null : (
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          onChange={handleChange}
                          id={obj._id}
                          name="description"
                        />
                        <button className="post__button" type="submit">
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
