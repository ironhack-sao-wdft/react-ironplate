import adminphoto from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function AdminPainel() {
  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="admin-content mt-5">
          <div className="admin-perfil">
            <img
              style={{ paddingRight: "15px" }}
              src={adminphoto}
              alt="pause logo"
            />

            <h1>Admin Panel</h1>
          </div>
        </div>
        <hr />
        <div className="admin-content mt-5">
          <Link to="/activitycreate">
            <button
              className="btn btn-light btn-lg"
              style={{ color: "#965353" }}
            >
              register new activity
            </button>
          </Link>
        </div>
        <hr />
        <div className="admin-list mt-5">
          <Link style={{ textDecoration: "none" }} to="/activitylist">
            <p
              style={{
                color: "#FBF8F3",
              }}
            >
              {" "}
              my cards
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
