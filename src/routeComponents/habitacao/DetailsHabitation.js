import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";

export default function DetailsHabitation() {
  const [state, setState] = useState({
    title: "",
    website: "",
    description: "",
    phone: "",
    photo: "",
    companyEmail: "",
    type: "Apartamento",
    price: "",
    room: "Estúdio",
  });
  const history = useHistory();

  const { id, country } = useParams();
  useEffect(() => {
    async function fetchHabitation() {
      try {
        //console.log(id);
        const response = await api.get(`/${country}/moradia/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchHabitation();
  }, []);
  const handleHabitationDelete = async (event) => {
    try {
      const response = await api.delete(`/${country}/moradia/${id}`);

      history.push(`/${country}/moradia`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="allPage">
      <div
        className="mt-5 ml-5 "
        style={{ maxHeight: "90vh", maxWidth: "100vw" }}
      >
        <Link
          to={`/${country}/moradia`}
          style={{ color: "#F7B633", textDecoration: "none" }}
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>

        <div className="container mt-5">
          <div className="row no-gutters">
            <div className="mb-5">
              <img
                src={state.photo}
                className="card-img "
                alt="..."
                style={{ maxHeight: "60vh" }}
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title ml-5">{state.title}</h5>
              <hr className="titleHr  " />
              <div
                className="card-body ml-5 mb-5"
                style={{ maxHeight: "60vh" }}
              >
                <p className="card-text ">Descrição: {state.description}</p>
                <p>Aluguel: {state.price}€</p>
                <p>Categoria: {state.type}</p>
                <p>Quartos: {state.room}</p>
                <p>Telefone: {state.phone}</p>
                <p>Website: {state.website}</p>
                <p>Email: {state.companyEmail}</p>
              </div>
            </div>

            <button className="botao " style={{ backgroundColor: "#5893D4" }}>
              <Link
                to={`/${country}/editar-moradia/${id}`}
                className="linksTextWhite"
              >
                Editar
              </Link>
            </button>
            <button
              className="botao ml-2 "
              style={{ backgroundColor: "#EB4C41" }}
              onClick={handleHabitationDelete}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
