import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../apis/api";

export default function Contents() {
  const [contents, setContents] = useState([]);

  const { country } = useParams();
  useEffect(() => {
    async function fetchContents() {
      try {
        const response = await api.get(`/conteudo/${country}`);
        setContents({ ...response.data });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchContents();
  }, []);

  return (
    <div>
      <div className="heroImageDoc"></div>
      <h1>{contents.category}</h1>
      <h3>{contents.country}</h3>
      <p>{contents.content[0].content}</p>
      <p>{contents.content[1].content}</p>
    </div>
  );
}
