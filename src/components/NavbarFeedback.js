import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export default function NavbarFeedback(props) {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <div className="my-5 mx-4 d-flex justify-content-between">
      <Link to={loggedInUser.role === "user" ? "/home" : "/adminpanel"}>
        <div sx={{ color: "white" }} fontSize="large">
          {/* <img src={AccountCircle} alt="User account" /> */}
          <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
        </div>
      </Link>
      <div className={props.invisibleClose} onClick={logout}>
        <CloseIcon sx={{ color: "white" }} fontSize="large" />
      </div>
    </div>
  );
}
