import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <div className="m-4 pt-3 d-flex justify-content-between">
      <div className={`${props.invisibleAccount}`}>
        <Link
          to={props.invisibleAccount === "invisible" ? "" : "/profile"}
          style={{ textDecoration: "none" }}
        >
          {/* <img src={AccountCircle} alt="User account" /> */}
          <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />{" "}
        </Link>

        <span style={{ color: "white", fontSize: "16px" }}>
          Welcome, {loggedInUser.user.name}!
        </span>
      </div>
      <div className={`${props.invisibleClose}`}>
        <CloseIcon sx={{ color: "white" }} fontSize="large" onClick={logout} />
      </div>{" "}
    </div>
  );
}
