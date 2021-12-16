import { Link } from "react-router-dom";

export default function ProfileSettings() {
  return (
    <div>
      <div className="admin-list mt-5">
        <Link to="/changeuserinfo">
          <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
            Change your info
          </button>
        </Link>
        <Link to="">
          <button
            className="btn btn-light btn-lg mt-5"
            style={{ color: "#965353" }}
          >
            Change password
          </button>
        </Link>
      </div>
    </div>
  );
}
