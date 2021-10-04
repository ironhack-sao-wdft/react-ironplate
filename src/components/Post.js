import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Home from "../routeComponents/Home";
// import ImageUpload from "./ImageUpload";

function Post() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      {!loggedInUser.user._id ? (
        <Home />
      ) : (
        {/* <div>
          <div>
            <img src="" alt="profile" />
            <h3>Fulano</h3>
          </div>
          <img src="" alt="post" />
          <h4>
            Fulano<span>Texto do post</span>
          </h4>
          <div>
            Map
            <p>
              <b>Siclano</b>comentário
            </p>
          </div>
          <form>
            <input type="text" placeholder="Add a comment..." />
            <button type="submit">Post</button>
          </form>
          <ImageUpload/>
        </div> */}
        
      )}
    </>
  );
}

export default Post;
