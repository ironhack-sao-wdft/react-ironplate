import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PermissionDelete from "../../components/permission.delete";
import "../../assets/styles/permissionDelete.css";

import api from "../../apis/api";

function PostDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deletePost() {
      try {
        await api.delete(`/delete-post/${id}`);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
    deletePost();
  }, [id, navigate]);

  return <PermissionDelete />;
}

export default PostDelete;
