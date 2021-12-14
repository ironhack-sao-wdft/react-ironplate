import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar(props) {
  return (
    <div className="m-4 pt-3 d-flex justify-content-between">
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
