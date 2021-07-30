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
    <div className="allPage">
      <div className="heroImageHabitation ">
        <h1 className="titleHero"> Moradia </h1>
        <hr className="docHr mt-5" />

        <Link
          to={`/${country}`}
          style={{
            color: "#F7B633",
            textDecoration: "none",
            marginLeft: "15vw",
          }}
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>

        <button className=" mt-4 botao-criarForum ">
          <Link to={`/${country}/adicionar-moradia`} className="linksTextWhite">
            Criar uma moradia
          </Link>
        </button>
      </div>

      <div className="container-moradia ">
        {moradias.map((moradia) => {
          return (
            <Link
              to={`/${country}/moradia/${moradia._id}`}
              className="allLinks"
            >
              <h4 className="card-title">{moradia.title}</h4>
              <div className=" mb-3" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <img
                      src={moradia.photo}
                      className="card-img "
                      alt="..."
                      style={{ maxHeight: "20vh" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body " style={{ maxHeight: "30vh" }}>
                      <p className="card-title ">{moradia.website}</p>

                      <p>Aluguel: {moradia.price}€</p>

                      <p className="card-text">Categoria: {moradia.type}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="moradiaHr" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllHabitation;
