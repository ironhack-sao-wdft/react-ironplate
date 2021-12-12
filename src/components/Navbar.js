import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {
  const [invisible, setInvisible] = useState("");

  return (
    <div className="mx-xs-2 mx-sm-2 mx-md-3 mx-lg-4 d-flex justify-content-between">
      <div className={`${invisible}`}>
        <AccountCircleIcon />
      </div>{" "}
      <div className={`${invisible}`}>
        <CloseIcon />
      </div>{" "}
    </div>
  );
}
