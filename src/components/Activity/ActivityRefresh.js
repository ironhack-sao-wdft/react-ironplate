import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ActivityRefresh() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <div
        className="text-center"
        style={{
          backgroundColor: "#FFF9F0",
          boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          width: "90%",
        }}
      >
        Carregando...
      </div>
      <div></div>
    </div>
  );
}
