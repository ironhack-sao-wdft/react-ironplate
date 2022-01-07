import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

function DeleteLivro() {

  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteLivro() {
      try {
        await api.delete(`/delete-livro/${id}`);
        navigate("/livro");
      } catch (err) {
        console.error(err);
      }
    }
    deleteLivro();
  }, [id, navigate]);

  return <div>Deletando...</div>;
}

export default DeleteLivro;
