import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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

  const { id } = useParams();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log(id);
        const response = await api.get(`/forum/${id}`);
        console.log(response.data);
        setPosts({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [id]);
  console.log(post);
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={post.pictureUrl} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <p className="card-text">
                <small className="text-muted">{post.tags}</small>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {post.answersId.map((banana) => {
        return (
          <Link>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={banana.pictureUrl} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{banana.title}</h5>
                    <p className="card-text">{banana.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{banana.tags}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default DetailsPost;
