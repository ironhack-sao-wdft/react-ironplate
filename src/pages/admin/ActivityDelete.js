import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../apis/api";

export default function ActivityDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteProduct() {
      try {
        await api.delete(`/activities/${id}`);
        navigate("/activitylist");
      } catch (err) {
        console.error(err);
      }
    }
    deleteProduct();
  }, [id, navigate]);

  return (
    <>
      <div>Deleting...</div>
      <div>Please Wait</div>
    </>
  );
}
