import React, { useState, useContext } from "react";

import { AuthContext } from "../contexts/authContext";
import { Link, useHistory } from "react-router-dom";
import api from "../apis/api";

import alemanha from "../img/home/alemanha.png";
import portugal from "../img/home/portugal.png";
import uk from "../img/home/uk.png";

import cadastro from "../img/home/cadastro.jpg";

function Home() {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [state, setState] = useState({ passwordHash: "", email: "" });
  const [errors, setErrors] = useState(null);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors(null);
      history.push("/");
    } catch (err) {
      console.error(err.response);
      setErrors(err.response.data.error);
    }
  }

  return (
    <div>
      <div
        className="text-center hero-image"
        style={{ width: "100vw", height: "100hv" }}
      >
        <div className="text-start mb-5" style={{ marginTop: "30vh" }}>
          <h1 style={{ color: "white" }}>Mala e Cuia</h1>
          <p style={{ color: "white", fontSize: "16pt" }}>
            Tudo o que você precisa saber sobre a vida de expatriado.
          </p>
        </div>

        <div style={{ marginTop: "25vh", marginBottom: "15vh" }}>
          <h5 className="mb-5 mx-3 mt-5 ml-5" style={{ textAlign: "left" }}>
            Escolha o país:
          </h5>

          <div className="d-flex flex-row justify-content-center page-wrap mt-5">
            <Link className="col-4" to="/alemanha">
              <h5 className="country-title align-self-end ">Alemanha</h5>
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
          className="yellowTaxi mb-0 mt-5"
          style={{ size: "8", width: "100vw", height: "10px" }}
        ></div>

        <div className="d-flex ">
          <img src={cadastro} className="margin-footer login-img" alt="..." />
          <div className="mt-5">
            <div className="mt-5 mx-5 mb-0 ml-5 justify-content-center">
              <h4 className="mb-0">
                Quer ficar por dentro de todas as informações?
              </h4>
              <h5 className="mt-0 mb-5 mt-4 ">
                Cadastre-se agora no Mala & Cuia
              </h5>
              <small className="mt-0 mb-5">
                Ainda não tem cadastro? <Link to="/signup">Clique aqui!</Link>
              </small>

              <form onSubmit={handleSubmit}>
                <div className="my-4 mx-5 d-flex flex-column">
                  <button
                    type="button"
                    className="btn yellowTaxi mt-3"
                    style={{ color: "white" }}
                  >
                    Clique aqui para se cadastrar!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
