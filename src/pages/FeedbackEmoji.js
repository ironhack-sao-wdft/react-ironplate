import NavbarFeedback from "../components/NavbarFeedback";
import emojiHeartEyes from "../assets/images/emojiHeartEyes.png";
import emojiHappy from "../assets/images/emojiHappy.png";
import emojiSad from "../assets/images/emojiSad.png";
import api from "../apis/api";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import FeedbackResponse from "../components/FeedbackResponse";

export default function FeedbackEmoji() {
  const [currentActivityObj, setCurrentActivityObj] = useState([]);
  const params = useParams();
  const { loggedInUser } = useContext(AuthContext);
  const [currentUserObj, setCurrentUserObj] = useState([]);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await api.get(`/activities/${params.id}`);
        setCurrentActivityObj(response.data);
        console.log(currentActivityObj);
      } catch (err) {
        console.error(err);
      }
    }
    fetchActivity();
  }, []);

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

  const blockedActivities = currentUserObj?.blockedActivities?.map(
    (currentActivity) => {
      return currentActivity._id;
    }
  );

  async function handleBlock(currentOption) {
    try {
      if (!blockedActivities.includes(currentOption._id)) {
        const response = await api.patch(`/profile/${loggedInUser.user._id}`, {
          blockedActivities: [...blockedActivities, currentOption._id],
        });
        console.log(response.data.blockedActivities);
      }
      console.log(blockedActivities);
    } catch (err) {
      console.error(err);
    }
  }

  const favorites = currentUserObj?.favorites?.map((currentActivity) => {
    return currentActivity._id;
  });

  async function handleFavorite(currentOption) {
    try {
      if (!favorites.includes(currentOption._id)) {
        const response = await api.patch(`/profile/${loggedInUser.user._id}`, {
          favorites: [...favorites, currentOption._id],
        });
        console.log(response.data.favorites);
      }
      console.log(favorites);
    } catch (err) {
      console.error(err);
    }
  }

  const pauseType =
    currentActivityObj.type === "indoors" ? "INDOOR PAUSE" : "OUTDOOR PAUSE";
  const [response, setResponse] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div>
      <NavbarFeedback invisibleClose="invisible" />
      {!showResponse ? (
        <div className="d-flex flex-column align-items-center">
          <div
            className="mb-4 pb-4 d-flex flex-column align-items-center justify-content-between"
            style={{
              backgroundColor: "#FFF9F0",
              boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "90%",
              height: "70vh",
            }}
          >
            <section className="d-flex flex-column justify-content-center align-items-center pt-5 mt-5">
              <h2
                className="text-center"
                style={{ fontSize: "1.85rem", fontWeight: "700" }}
              >
                congratulations!
              </h2>
              <p className="text-center" style={{ fontSize: "1.85rem" }}>
                you just finished your {pauseType}.
              </p>
            </section>
            <section>
              <p style={{ fontSize: "1.85rem" }}>how did that feel like?</p>
            </section>
            <section className="d-flex flex-row justify-content-around mb-4">
              <div
                onClick={() => {
                  setResponse("good");
                  setShowResponse(true);
                  handleFavorite(currentActivityObj);
                }}
                className="d-flex justify-content-center align-items-center"
                style={{
                  background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
                  borderRadius: "10px",
                  width: "23vw",
                  height: "12.3vh",
                  boxShadow: "-5px 5px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <img
                  style={{ width: "12vw", height: "7vh", maxWidth: "50px" }}
                  src={emojiHeartEyes}
                  alt="Very good"
                />
              </div>
              <div
                onClick={() => {
                  setResponse("good");
                  setShowResponse(true);
                }}
                className="d-flex justify-content-center align-items-center mx-4"
                style={{
                  background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
                  borderRadius: "10px",
                  width: "23vw",
                  height: "12.3vh",
                  boxShadow: "-5px 5px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <img
                  style={{ width: "12vw", height: "7vh", maxWidth: "50px" }}
                  src={emojiHappy}
                  alt="Good"
                />
              </div>
              <div
                onClick={() => {
                  setResponse("bad");
                  setShowResponse(true);
                  handleBlock(currentActivityObj);
                }}
                className="d-flex justify-content-center align-items-center"
                style={{
                  background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
                  borderRadius: "10px",
                  width: "23vw",
                  height: "12.3vh",
                  boxShadow: "-5px 5px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <img
                  style={{ width: "12vw", height: "7vh", maxWidth: "50px" }}
                  src={emojiSad}
                  alt="Not good"
                />
              </div>
            </section>
          </div>
        </div>
      ) : (
        <FeedbackResponse response={response} />
      )}
    </div>
  );
}
