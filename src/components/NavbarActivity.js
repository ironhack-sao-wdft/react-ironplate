import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function NavbarActivity(props) {
  return (
    <div className="my-3 mx-4 d-flex justify-content-between">
      <div
        onClick={() => {
          props.setDescriptionToggle(false);
        }}
        sx={{ color: "white" }}
        fontSize="large"
      >
        {/* <img src={AccountCircle} alt="User account" /> */}
        <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
      </div>{" "}
      <div className={`invisible`}>
        <CloseIcon />
      </div>{" "}
    </div>
  );
}
