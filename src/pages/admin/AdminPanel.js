import adminphoto from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

export default function AdminPainel() {
  return (
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
        <Link to="/activityedit">
          <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
            register new activity
          </button>
        </Link>
      </div>
      <hr />
      <div className="admin-list mt-5">
        <Link style={{ textDecoration: "none" }} to="">
          <p
            style={{
              color: "#FBF8F3",
            }}
          >
            {" "}
            my cards
          </p>
        </Link>
        <Link style={{ textDecoration: "none" }} to="">
          <p
            style={{
              color: "#FBF8F3",
            }}
          >
            {" "}
            analytics
          </p>{" "}
        </Link>
      </div>
    </div>
  );
}
