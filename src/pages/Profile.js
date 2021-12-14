import Navbar from "../components/Navbar.js";
import ProfileSettings from "../components/Profile/ProfileSettings";
import ProfileOverview from "../components/Profile/ProfileOverview";
import ProfileBlocked from "../components/Profile/ProfileBlocked";
import temporaryUserIcon from "../assets/images/defaultUserIcon.png";
import { useState } from "react";

export default function Profile() {
  const [profileState, setProfileState] = useState("settings");

  return (
    <div>
      <div>
        <Navbar invisibleAccount={"invisible"} />
      </div>
      <section className="d-flex flex-row align-items-center justify-content-around mx-5 px-2">
        <div className="rounded-circle" style={{}}>
          <img
            style={{ width: "20.5vw", height: "11.5vh" }}
            alt="User"
            src={temporaryUserIcon}
          ></img>
        </div>
        <div style={{ width: "50vw", maxWidth: "240px" }}>
          <h2
            className="ps-4"
            style={{ fontSize: "2.1rem", color: "#FBF8F3", fontWeight: "bold" }}
          >
            Pedro Ipsum
          </h2>
        </div>
      </section>
      <section
        style={{ color: "#FBF8F3" }}
        className="d-flex flex-row justify-content-between mt-5 mx-4"
      >
        <span
          onClick={() => setProfileState("settings")}
          className={`profileUnderline ${
            profileState === "settings" ? "profileUnderlineActive" : null
          }`}
        >
          settings
        </span>
        <span
          onClick={() => setProfileState("overview")}
          className={`profileUnderline ${
            profileState === "overview" ? "profileUnderlineActive" : null
          }`}
        >
          overview
        </span>
        <span
          onClick={() => setProfileState("blocked")}
          className={`profileUnderline ${
            profileState === "blocked" ? "profileUnderlineActive" : null
          }`}
        >
          blocked
        </span>
      </section>
      {profileState === "settings" ? <ProfileSettings /> : null}
      {profileState === "overview" ? <ProfileOverview /> : null}
      {profileState === "blocked" ? <ProfileBlocked /> : null}
    </div>
  );
}
