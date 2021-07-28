import { useState, useEffect } from "react";

import api from "../../apis/api";

export default function Contents() {
  const [contents, setContents] = useState({});

  useEffect(() => {
    async function fetchContents() {
      try {
        const response = await api.get("/conteudo/:country");
        setContents({ ...response.data });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchContents();
  }, {});

  return (
    <div>
      {" "}
      <h1>{contents.category}</h1>
      <h3>{contents.country}</h3>
    </div>
  );
}
