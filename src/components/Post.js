import { useState, useEffect, useContext } from "react";
import api from "../apis/api";
import "../assets/styles/Post.css";
import Avatar from "@material-ui/core/Avatar";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../contexts/authContext";

function Post() {
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

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
  }, []);

  console.log(postDetails);

//WIP

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="postOverview">
          {postDetails.map((obj) => {
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
                      </h6>
                    );
                  })}
                  {!loggedInUser ? null : (
                    <form>
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value=""
                        onChange=""
                      />
                      <button
                        disabled=""
                        className="post__button"
                        type="submit"
                        onClick=""
                      >
                        Post
                      </button>
                    </form>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Post;
