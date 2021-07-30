import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import api from "../../apis/api";

function AllJobs() {
  const [jobs, setJobs] = useState([]);

  const { country } = useParams();

  //buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await api.get(`/${country}/emprego`);
        console.log(response);
        setJobs([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="container mt-5">
      {jobs.map((job) => {
        return (
          <Link>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={job.title} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{job.company}</h5>
                    <p className="card-text">{job.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{job.Url}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllJobs;
