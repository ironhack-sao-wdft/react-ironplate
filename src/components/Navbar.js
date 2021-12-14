import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircle from "../assets/images/accountCircle.png";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar(props) {
  // const [invisibleAccount, setInvisibleAccount] = useState("");

  // const [invisibleClose, setInvisibleClose] = useState("");

  return (
    <div className="m-4 d-flex justify-content-between">
      <div className={`${props.invisibleAccount}`}>
        {/* <img src={AccountCircle} alt="User account" /> */}
        <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />
      </div>{" "}
      <div className={`${props.invisibleClose}`}>
        <CloseIcon sx={{ color: "white" }} fontSize="large" />
      </div>{" "}
    </div>
  );
}
