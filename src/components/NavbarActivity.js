import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircle from "../assets/images/accountCircle.png";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar(props) {
  const [invisibleAccount, setInvisibleAccount] = useState("invisible");

  const [invisibleClose, setInvisibleClose] = useState("");

  return (
    <div className="my-5 mx-2 d-flex justify-content-between">
      <div className={`${invisibleAccount}`}>
        {/* <img src={AccountCircle} alt="User account" /> */}
        <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />
      </div>{" "}
      <div className={`${invisibleClose}`}>
        <CloseIcon
          onClick={() => {
            props.setDescriptionToggle(false);
          }}
          sx={{ color: "white" }}
          fontSize="large"
        />
      </div>{" "}
    </div>
  );
}
