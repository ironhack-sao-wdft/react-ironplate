import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../apis/api";

function AllHabitation() {
  const [moradias, setMoradias] = useState([]);

  const { country } = useParams();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchMoradias() {
      try {
        const response = await api.get(`/${country}/moradia`);
        //console.log(response);
        setMoradias([...response.data]);

        //console.log("oi");
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoradias();
  }, []);

  return (
    <div>
      <div className="heroImageHabitation">
        <h1 className="titleHero"> Moradia </h1>
      </div>

      <div className="container mt-5">
        {moradias.map((moradia) => {
          return (
            <Link to={`/${country}/moradia/${moradia._id}`}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={moradia.photo} className="card-img" alt="..." />
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
    </div>
  );
}

export default AllHabitation;
