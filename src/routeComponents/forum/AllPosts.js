import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import axios from "axios";
import api from "../../apis/api";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get("/forum");
        setPosts([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  });

  return (
    <div className="container mt-5">
      {/*{posts.map((post) => {
        return (})*/}
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={posts.pictureUrl} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">{posts.description}</p>
              <p className="card-text">
                <small className="text-muted">{posts.tags}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default AllPosts;
