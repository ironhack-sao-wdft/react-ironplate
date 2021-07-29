import React from "react";
import { Link } from "react-router-dom";
import alemanha from "../img/home/alemanha.jpg";
import portugal from "../img/home/portugal.jpg";
import uk from "../img/home/uk.jpg";

function Home() {
  return (
    <div
      className="text-center hero-image bodyfooter"
      style={{ width: "100vw", height: "40%" }}
    >
      <div className="" style={{ marginTop: "200px" }}>
        <h1 style={{ color: "white" }}>Mala e Cuia</h1>
        <p style={{ color: "white" }}>
          Tudo o que você precisa saber sobre a vida de expatriado.
        </p>
      </div>

      <div className="m-5 bodyfooter" style={{ marginTop: "100px" }}>
        <h5 className="mb-3 mt-5" style={{ textAlign: "left" }}>
          Escolha o país:
        </h5>

        <div className="card-group mb-5">
          <Link className="card" to="/alemanha">
            <img src={alemanha} className="card-img-top" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Alemanha
              </h5>
            </div>
          </Link>

          <Link className="card" to="/portugal">
            <img src={portugal} className="card-img-top" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Portugal
              </h5>
            </div>
          </Link>

          <Link className="card" to="/reinounido">
            <img src={uk} className="card-img-top" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Reino Unido
              </h5>
            </div>
          </Link>
        </div>
      </div>
      <hr className="docHr" />
    </div>
  );
}

export default Home;
