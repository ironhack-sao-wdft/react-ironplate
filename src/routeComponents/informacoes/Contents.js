import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../apis/api";

export default function Contents() {
  const [contents, setContents] = useState([]);

  const { country } = useParams();


  useEffect(() => {
    async function fetchContents() {
      try {
        const response = await api.get(`/${country}/conteudo`);
        setContents({ ...response.data });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchContents();
  }, []);

  return (
    <div className="textDoc">
      <div className="heroImageDoc"></div>

      <h3 className="countryDoc">{contents.country}</h3>
      <hr className="docHr" />
      <p></p>
    </div>
  );
}
