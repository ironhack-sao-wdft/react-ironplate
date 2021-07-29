import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../apis/api";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/forum");
        // console.log(response);

        console.log("oi");
        setPosts([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="heroImageForum">
        <h1 className="titleHero"> Fórum </h1>
      </div>
      <div className="botoes-forum mt-5">
        <button className="btn botao-criarForum mb-3">
          <Link to={"/criar-forum"} className="linksTextWhite">
            Criar um novo post
          </Link>
        </button>
      </div>

      <div className="container mt-5 ">
        {posts.map((post) => {
          return (
            <Link to={`/forum/${post._id}`} className="allLinks">
              <div
                className="mb-2"
                style={{ maxHeight: "30vh", maxWidth: "60vw" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img
                      src={post.pictureUrl}
                      className="card-img "
                      alt="..."
                      style={{ maxHeight: "16vh", maxWidth: "11vw" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body " style={{ maxHeight: "30vh" }}>
                      <h5 className="card-title ">{post.title}</h5>
                      <p className="card-text post-description">
                        {post.description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{post.tags}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllPosts;
