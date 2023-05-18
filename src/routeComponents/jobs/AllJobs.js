import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../apis/api";

function AllJobs() {
  const [jobs, setJobs] = useState([]);

  const { country } = useParams();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await api.get(`/${country}/emprego`);
        setJobs([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="allPage">
      <div className="heroImageJobs">
        <h1 className="titleHero">Emprego</h1>
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

        <button className=" mt-5 botao-criarForum ">
          <Link to={`/${country}/criar-emprego`} className="linksTextWhite">
            Anunciar um oportunidade
          </Link>
        </button>
      </div>
      <div className="container mt-5">
        {jobs.map((job) => {
          return (
            <div className="cardJobs">
              <h4 className="mt-5 ml-5">{job.title}</h4>
              <hr className="titleHr " />
              <div className=" mb-3" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-3"></div>
                  <div className="">
                    <div className="card-body " style={{ maxHeight: "30vh" }}>
                      <p>Empresa: {job.company}</p>
                      <p>Salário: {job.salary}€</p>
                      <p>Descrição: {job.description}</p>
                      <p>Website: {job.company}</p>
                      <p>Email: {job.companyEmail}</p>
                      <p>Telefone: {job.phone}</p>

                      <p className="mb-5">Cidade: {job.city}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="moradiaHr mt-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllJobs;
