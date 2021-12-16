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
        {/* <img src={AccountCircle} alt="User account" /> */}
        <Link to="/userprofile" style={{ textDecoration: "none" }}>
          {" "}
          <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />{" "}
          <span style={{ color: "white", fontSize: "16px" }}>
            Welcome {loggedInUser.user.name}!
          </span>
        </Link>
      </div>{" "}
      <div className={`${props.invisibleClose}`}>
        <CloseIcon sx={{ color: "white" }} fontSize="large" onClick={logout} />
      </div>{" "}
    </div>
  );
}
