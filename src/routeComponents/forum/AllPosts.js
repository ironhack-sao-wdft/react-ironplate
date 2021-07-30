import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../apis/api";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const { country } = useParams();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`/${country}/forum`);
        // console.log(response);

        setPosts([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className>
      <div className="heroImageForum">
        <h1 className="titleHero"> Fórum </h1>
      </div>
      <hr className="docHr " />
      <div className="botoes-forum mt-5">
        <Link
          to={`/${country}`}
          style={{
            color: "#F7B633",
            textDecoration: "none",
            marginLeft: "15vw",
          }}
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>
        <button className=" botao-criarForum ">
          <Link to={`/${country}/criar-forum`} className="linksTextWhite">
            Criar um novo post
          </Link>
        </button>
      </div>

      <div className="container mt-5 allPage">
        {posts.map((post) => {
          return (
            <Link to={`/${country}/forum/${post._id}`} className="allLinks">
              <div
                className="mb-2 ml-5"
                style={{ maxHeight: "30vh", maxWidth: "60vw" }}
              >
                <div className="row no-gutters ">
                  <div className="col-md-2">
                    <h5 className="card-title mt-4 ml-3">{post.title}</h5>
                    <img
                      src={post.pictureUrl}
                      className="card-img "
                      alt="..."
                      style={{ maxHeight: "16vh", maxWidth: "11vw" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body " style={{ maxHeight: "30vh" }}>
                      <p className="card-text mt-4 post-description">
                        Descrição: {post.description}
                      </p>
                      <p className="card-text">{post.link}</p>
                      <p className="card-text">
                        <small className="text-muted">Tag: {post.tags}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="postHr" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllPosts;
