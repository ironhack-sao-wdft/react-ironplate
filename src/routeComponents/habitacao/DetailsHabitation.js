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

  const { id } = useParams();
  useEffect(() => {
    async function fetchHabitation() {
      try {
        //console.log(id);
        const response = await api.get(`/moradia/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchHabitation();
  }, []);
  const handleHabitationDelete = async (event) => {
    try {
      const response = await api.delete(`/moradia/${id}`);

      history.push(`/moradia`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div
      className="margin-footer border border-light"
      style={{ margin: "100px" }}
    >
      <div
        className="mt-5 ml-5"
        style={{ maxHeight: "40vh", maxWidth: "60vw" }}
      >
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src={state.photo}
              className="card-img "
              alt="..."
              style={{ maxHeight: "20vh" }}
            />
          </div>
          <div className="container col-md-8">
            <div className="card-body " style={{ maxHeight: "30vh" }}>
              <h5 className="card-title ">{state.title}</h5>
              <p className="card-text ">{state.description}</p>
              <p>
                <strong>Aluguel:</strong> {state.price}€
              </p>
              <p>
                <strong>Categoria: </strong>
                {state.type}
              </p>
              <p>
                <strong>Quartos:</strong> {state.room}
              </p>
            </div>
          </div>
          <div className="container d-flex flex-row-reverse">
            <button
              className="btn btn-danger col-2 mx-2"
              onClick={handleHabitationDelete}
            >
              Excluir
            </button>
            <button className="btn yellowTaxi col-2">
              <Link to={`/editar-moradia/${id}`} className="linksTextWhite">
                Editar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
