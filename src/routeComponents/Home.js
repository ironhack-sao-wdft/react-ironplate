import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import alemanha from "../img/home/alemanha.jpg";
import portugal from "../img/home/portugal.jpg";
import uk from "../img/home/uk.jpg";
=======
import alemanha from "../img/home/alemanha.png";
import portugal from "../img/home/portugal.png";
import uk from "../img/home/uk.png";
import cadastro from "../img/home/cadastro.jpg";
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4

function Home() {
  return (
    <div
<<<<<<< HEAD
      className="text-center hero-image bodyfooter"
      style={{ width: "100vw", height: "40%" }}
    >
      <div className="" style={{ marginTop: "200px" }}>
        <h1 style={{ color: "white" }}>Mala e Cuia</h1>
        <p style={{ color: "white" }}>
=======
      className="text-center hero-image"
      style={{ width: "100vw", height: "40%" }}
    >
      <div className="text-start" style={{ marginTop: "200px" }}>
        <h1 style={{ color: "white" }}>Mala e Cuia</h1>
        <p style={{ color: "white", fontSize: "16pt" }}>
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
          Tudo o que você precisa saber sobre a vida de expatriado.
        </p>
      </div>

<<<<<<< HEAD
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
=======
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

      <div className="d-flex ">
        <img src={cadastro} className="margin-footer login-img" alt="..." />
        <div className="mt-5 mx-5 mb-0">
          <h5 className="mb-0">Acesse sua container</h5>
          <small className="mt-0 mb-5">
            Ainda não tem cadastro? <Link to="/signup">Clique aqui!</Link>
          </small>

          <div className="my-4 mx-5 d-flex flex-column">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Email"
              aria-label="Disabled input example"
              disabled
              style={{ width: "40vw" }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              aria-label="Disabled input example"
              disabled
            />
            <button
              type="button"
              className="btn yellowTaxi mt-3"
              style={{ color: "white" }}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
>>>>>>> 1763716ba128a3379d7708fb1003ec4a2bfc13b4
    </div>
  );
}

export default Home;
