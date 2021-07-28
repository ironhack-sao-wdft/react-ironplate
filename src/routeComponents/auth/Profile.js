import { Link } from "react-router-dom";
import { userState, useEffect, useState } from "react";
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
    <div className="container mt-5">
      <h1 className="pt-3">Perfil</h1>
      <hr />
      <div className="row d-flex justify-content-sm-start align-items-center">
        <img
          className="img-fluid rounded-circle"
          style={{ maxWidth: "150px" }}
          src={state.image}
          alt="Sua foto de perfil"
        />

        <div class="d-flex flex-column bd-highlight mb-3 ml-5">
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
      <Link className="btn btn-primary mt-3" to="/profile/edit">
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
                          <small className="text-muted">{post.createdAt}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
export default Profile;
