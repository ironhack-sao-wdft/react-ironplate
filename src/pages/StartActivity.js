import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../apis/api";
import Navbar from "../components/Navbar";
import { Image, Video, CloudinaryContext } from "cloudinary-react";

export default function StartActivity() {
  const [currentActivityObj, setCurrentActivityObj] = useState([]);
  const params = useParams();

  const videoIndex = currentActivityObj.mediaURL.indexOf("/pause/");

  const id = currentActivityObj.mediaURL.slice(videoIndex + 7).split(".")[0];

  useEffect(() => {
    function fetchActivity() {
      api
        .get(`/activities/${params.id}`)
        .then((response) => {
          const currentActivity = response.data;
          setCurrentActivityObj(currentActivity);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchActivity();
  }, []);

  return (
    <div className="d-flex flex-column">
      <Navbar invisibleAccount={"invisible"} />

      <div className="d-flex justify-content-center">
        <div
          className="mb-4 pb-4"
          style={{
            backgroundColor: "#FFF9F0",
            boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            width: "90%",
            height: "75vh",
          }}
        >
          <section className="d-flex flex-column justify-content-center align-items-center pt-4 mt-2">
            <span style={{ fontSize: "1.4rem" }}>you are currently in</span>
            <h1
              className="py-3 mb-3"
              style={{ fontSize: "1.8rem", fontWeight: "700" }}
            >
              {currentActivityObj.name}
            </h1>
          </section>

          <section className="d-flex flex-column justify-content-center align-items-center mb-2 pb-2">
            {currentActivityObj.media === "image" ? (
              <img
                className=""
                style={{ height: "29vh", borderRadius: "15px" }}
                src={currentActivityObj.mediaURL}
                alt={currentActivityObj.name}
              />
            ) : null}
            {currentActivityObj.media === "video" ? (
              <Video
                cloudName="igor-stefano"
                publicId={`${id}`}
                controls="true"
                style={{ height: "26vh", borderRadius: "15px" }}
              />
            ) : null}

            <p
              style={{ fontSize: "1.4rem", opacity: "0.8" }}
              className="text-center pt-4 px-5"
            >
              follow the instructions and enjoy your pause.
            </p>
          </section>
          <Link to={`/feedback/${params.id}`}>
            <footer className="d-flex flex-column justify-end align-items-center pt-3">
              <small style={{ fontSize: "1.1rem" }}>end activity</small>
            </footer>
          </Link>
        </div>
      </div>
    </div>
  );
}
