import { useEffect, useState } from "react";
import api from "../apis/api";

import { Link } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const postsResponse = await api.get("/posts");
        console.log(postsResponse);

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
      <div className="container pb-5">
        <h1 className="text-center m-5 pt-5">Viagens da comunidade</h1>{" "}
        {posts.length
          ? posts.map((post) => {
              return (
                <div
                  key={post._id}
                  className=" card m-5"
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
                        <Link
                          className="btn btn-primary m-4 mb-5 float-right"
                          to={`/post/${post._id}`}
                        >
                          Ver mais
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
    // <div class="container p-5" style={{ backgroundColor: "#fffdf0" }}>
    //   <div class="row">
    //     <div class="col-sm-3 " style={{ backgroundColor: "#f2bb9c" }}>
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       Perfil foto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //       texto texto texto texto <br />
    //     </div>
    //     <div class="col-sm-9">
    //       <h2 className="m-5 text-center">Viagens da comunidade</h2>

    //       <div
    //         className="col-sm-10 m-5 d-flex justify-content-center"
    //         style={{ backgroundColor: "#fffdf0" }}
    //       >
    //         <PostCard />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Feed;

{
  /* <div style={{ backgroundColor: "#fffdf0" }}>
  <div className="container p-5 ">
    <div className="row">
      <div className="col-2 " style={{ backgroundColor: "#f2bb9c" }}>
        .col-4 this 4-column-wide div gets wrapped onto a new line as one
        contiguous unit.
      </div>
      <div className="col-10" style={{ backgroundColor: "#fffdf0" }}>
        .col-8 Subsequent columns continue along the new line.
      </div>
    </div>
  </div>
</div>; */
}
