import React from "react";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import alemanha from "../img/home/alemanha.png";
import portugal from "../img/home/portugal.png";
import uk from "../img/home/uk.png";
import cadastro from "../img/home/cadastro.jpg";

function Home() {
  return (
    <div
      className="text-center hero-image"
      style={{ width: "100vw", height: "40%" }}
    >
      <div className="text-start" style={{ marginTop: "200px" }}>
        <h1 style={{ color: "white" }}>Mala e Cuia</h1>
        <p style={{ color: "white", fontSize: "16pt" }}>
          Tudo o que você precisa saber sobre a vida de expatriado.
        </p>
      </div>

      <div className="mb-0" style={{ margin: "120px" }}>
        <h5 className="mb-3 mx-3" style={{ textAlign: "left" }}>
          Escolha o país:
        </h5>

        <div className="d-flex flex-row justify-content-center page-wrap">
          <Link className="col-4" to="/alemanha">
            <h5 className="align-self-end country-title">Alemanha</h5>
            <img src={alemanha} className="country-img" alt="..." />
          </Link>

          <Link className="col-4" to="/portugal">
            <h5 className="align-self-end country-title">Portugal</h5>
            <img src={portugal} className="country-img" alt="..." />
          </Link>

          <Link className="col-4" to="/reinounido">
            <h5 className="align-self-end country-title">Reino Unido</h5>
            <img src={uk} className="country-img mb-5" alt="..." />
          </Link>
        </div>
      </div>

      <div
        className="yellowTaxi mb-0"
        style={{ size: "8", width: "100vw", height: "10px" }}
      ></div>

      <div className="d-flex">
        <img src={cadastro} className="margin-footer login-img" alt="..." />

        <Login />
      </div>
    </div>
  );
}

export default Home;
