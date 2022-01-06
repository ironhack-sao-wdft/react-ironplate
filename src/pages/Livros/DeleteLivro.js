import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PermissionDelete from "../../components/permission.delete";
import "../../assets/styles/permissionDelete.css";

import api from "../../apis/api";

function DeleteLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteLivro() {
      try {
        await api.delete(`/delete-livro/${id}`);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteLivro();
  }, [id, navigate]);

  return <PermissionDelete />;
}

export default DeleteLivro;
