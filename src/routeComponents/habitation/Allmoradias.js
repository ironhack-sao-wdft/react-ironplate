import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import api from "../../apis/api";

function AllMoradias() {
  const [moradias, setMoradias] = useState([]);

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchMoradias() {
      try {
        const response = await api.get("/moradia");
        console.log(response);
        setMoradias([...response.data]);

        console.log("tchau");
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoradias();
  }, []);

  return (
    <div className="container mt-5">
      {moradias.map((moradia) => {
        return (
          <Link>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={moradia.pictureUrl}
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{moradia.title}</h5>
                    <p className="card-text">{moradia.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{moradia.price}</small>
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

export default AllMoradias;
