import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../apis/api";

/* {
    category: "",
    country: "",
    content: [{ type: "", conteudo: "" }],
  }*/

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
    <div className="textDoc allPage">
      <div className="heroImageDoc"></div>
      <hr className="docHr" />
      <div>
        <p>{contents.category}</p>
        <h3>{contents.country}</h3>
        <p>{contents.content[0].conteudo}</p>
      </div>
    </div>
  );
}
