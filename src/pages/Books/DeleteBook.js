import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../apis/api";

function DeleteBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function deleteBook() {
      try {
        await api.delete(`/api/book/delete-book/${id}`);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteBook();
  }, [id, navigate]);

  return <div>Deletando...</div>;
}

export default DeleteBook;
