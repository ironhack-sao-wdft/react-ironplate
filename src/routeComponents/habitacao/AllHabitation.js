import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../apis/api";

function AllHabitation() {
  const [moradias, setMoradias] = useState([]);

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchMoradias() {
      try {
        const response = await api.get("/moradia");
        console.log(response);
        setMoradias([...response.data]);

        console.log("oi");
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoradias();
  }, []);

  return (
    <div className="container mt-5 margin-footer">
      {moradias.map((moradia) => {
        return (
          <Link to={`/moradia/${moradia._id}`}>
            <div className="card mb-3 no-gutters d-flex flex-row">
              <img
                src={moradia.photo}
                className="card-img"
                style={{ width: "25vw", height: "auto" }}
                alt="..."
              />
              <div className="d-flex col-8">
                <div className="card-body">
                  <h5 className="card-title fontElefant">{moradia.title}</h5>
                  <p className="card-text fontElefant">{moradia.description}</p>
                  <p className="card-text fontElefant">{moradia.price}€</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllHabitation;
