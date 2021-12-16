import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { loggedInUser, logout } = useContext(AuthContext);
  console.log(loggedInUser);

  return (
    <div className="m-4 pt-3 d-flex justify-content-between">
      <div className={`${props.invisibleAccount}`}>
        <Link
          to={props.invisibleAccount === "invisible" ? "" : "/profile"}
          style={{ textDecoration: "none" }}
        >
          {" "}
          <img
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid white",
            }}
            alt="User"
            src={loggedInUser.user.pictureURL}
          ></img>{" "}
          <span style={{ color: "white", fontSize: "16px" }}>
            Welcome, {loggedInUser.user.name}!
          </span>
        </Link>
      </div>
      <div className={`${props.invisibleClose}`}>
        <CloseIcon sx={{ color: "white" }} fontSize="large" onClick={logout} />
      </div>{" "}
    </div>
  );
}
