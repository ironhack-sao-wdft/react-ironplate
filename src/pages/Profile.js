import Navbar from "../components/Navbar.js";
import temporaryUserIcon from "../assets/images/pause.png";

export default function Profile() {
  return (
    <div>
      <div>
        <Navbar invisibleAccount={"invisible"} />
      </div>
      <section className="d-flex flex-row align-items-center justify-content-around mx-5 px-3">
        <div className="rounded-circle" style={{ backgroundColor: "" }}>
          <img
            style={{ width: "10.5vw", height: "11.5vh" }}
            alt="User"
            src={temporaryUserIcon}
          ></img>
        </div>
        <h2
          style={{ fontSize: "2.1rem", color: "#FBF8F3", fontWeight: "bold" }}
        >
          Username
        </h2>
      </section>
    </div>
  );
}
