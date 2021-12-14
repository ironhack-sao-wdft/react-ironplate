import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar(props) {
  return (
    <div className="my-5 mx-2 d-flex justify-content-between">
      <div className={`invisible`}>
        {/* <img src={AccountCircle} alt="User account" /> */}
        <AccountCircleIcon sx={{ color: "white" }} fontSize="large" />
      </div>{" "}
      <div>
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
