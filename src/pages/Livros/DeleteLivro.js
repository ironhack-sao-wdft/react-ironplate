import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

function DeleteLivro() {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function deleteLivro() {
      try {
        await api.delete(`/delete-livro/${id}`);
        navigate("/lista");
      } catch (err) {
        console.error(err);
      }
    }
    deleteLivro();
  });

  return <div>Deletando...</div>;
}

export default DeleteLivro;
