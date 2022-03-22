import NavbarFeedback from "../components/NavbarFeedback.js";
import ProfileSettings from "../components/Profile/ProfileSettings";
import ProfileOverview from "../components/Profile/ProfileOverview";
import ProfileBlocked from "../components/Profile/ProfileBlocked";
import api from "../apis/api";
import { AuthContext } from "../contexts/authContext";
import { useState, useContext, useEffect } from "react";

export default function Profile() {
  const [profileState, setProfileState] = useState("settings");
  const [currentUserObj, setCurrentUserObj] = useState([]);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    function fetchUser() {
      api
        .get(`/profile/`)
        .then((response) => {
          const currentUser = response.data;
          setCurrentUserObj(currentUser);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchUser();
  }, []);

  return (
    <div>
      <div>
        <NavbarFeedback invisibleAccount={"invisible"} />
      </div>
      <section className="d-flex flex-column align-items-center mx-5 px-2">
        <div className="rounded-circle" style={{}}>
          <img
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
            alt="User"
            src={loggedInUser.user.pictureURL}
          ></img>
        </div>

        <div>
          <h2
            className="mt-1"
            style={{ fontSize: "2.1rem", color: "#FBF8F3", fontWeight: "bold" }}
          >
            {loggedInUser.user.name}
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
      {profileState === "blocked" ? (
        <ProfileBlocked currentUserObj={currentUserObj} />
      ) : null}
    </div>
  );
}
