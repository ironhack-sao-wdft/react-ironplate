import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../apis/api";

function Profile() {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    image: "",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");

        setState({ ...response.data });

        const postsResponse = await api.get("/post");

        if (postsResponse.data.length) {
          setPosts([...postsResponse.data]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div style={{ backgroundColor: "#fffdf0" }}>
      <div className="container md-me-5 mt-5">
        <h1 className="pt-4">Perfil</h1>
        <hr />
        <div className="row d-flex justify-content-sm-start align-items-center">
          <img
            className="img-fluid rounded-circle mr-2"
            style={{ maxWidth: "150px" }}
            src={state.image}
            alt="Sua foto de perfil"
          />

          <div className="d-flex flex-column bd-highlight mb-3 mt-5">
            <p>
              <strong>Nome: </strong>
              {state.name}
            </p>

            <p>
              <strong>Sobrenome: </strong>
              {state.lastName}
            </p>

            <p>
              <strong>E-mail: </strong>
              {state.email}
            </p>
          </div>
        </div>
        <Link className="btn btn-primary mt-3 mb-3" to="/profile/edit">
          Editar Perfil
        </Link>

        <h1 className="pt-3">Meus posts</h1>
        <hr />

        <div className="py-4">
          {posts.length
            ? posts.map((post) => {
                return (
                  <div
                    key={post._id}
                    className="card mb-3"
                    style={{ maxWidth: "50wv" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={post.image}
                          className="img-fluid rounded-start"
                          alt="Destiny"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Destino:</strong> {post.title}
                          </h5>
                          <p className="card-text">{post.content}</p>
                          <p className="card-text">
                            <strong>Prós: </strong> {post.pros}
                          </p>
                          <p className="card-text">
                            <strong>Contras: </strong>
                            {post.cons}
                          </p>
                          <p className="card-text">
                            <strong>Total gasto: </strong>
                            {post.tripCost}
                          </p>
                          <p className="card-text">
                            <small className="text-muted">{`${new Date(
                              post.createdAt
                            )
                              .getDay()
                              .toString()
                              .padStart(2, "0")}/${new Date(post.createdAt)
                              .getMonth()
                              .toString()
                              .padStart(2, "0")}/${new Date(
                              post.createdAt
                            ).getFullYear()}`}</small>
                          </p>
                          <Link className="btn btn-primary mt-3 mb-3" to={`/post/${post._id}/DeletePost`}>
          Deletar Post
        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
export default Profile;
