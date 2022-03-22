import emojiPopper from "../assets/images/emojiPopper.png";
import FacebookIcon from "../assets/images/facebookIcon.png";
import InstagramIcon from "../assets/images/instagramIcon.png";
import TwitterIcon from "../assets/images/twitterIcon.png";
import { Link } from "react-router-dom";

export default function FeedbackResponse(props) {
  if (props.response === "bad") {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ color: "#FBF8F3" }}
      >
        <section className="py-5 mx-5 px-4">
          <h1
            className=" mb-5"
            style={{ fontSize: "1.7rem", fontWeight: "bold" }}
          >
            oh no!
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            we're sorry your PAUSE didn't go as expected.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            would you like to try another activity?
          </p>
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center">
          <Link to="/home">
            <button
              className="px-5 py-3 mb-4"
              style={{
                background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
                border: 0,
                borderRadius: "10px",
                color: "#3A3938",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              yes, please!
            </button>
          </Link>

          <Link to="/profile">
            <button
              style={{
                background: "none",
                border: "none",
                color: "#FFF9F0",
                fontSize: "1.5rem",
              }}
            >
              no, thanks.
            </button>
          </Link>
        </section>
      </div>
    );
  } else {
    return (
      <div className="" style={{ color: "#FBF8F3" }}>
        <section className="d-flex flex-column justify-content-center align-items-center text-center py-5 mx-5 px-4">
          <div>
            <img
              style={{ width: "12vw", height: "7vh" }}
              src={emojiPopper}
              alt="Positive feedback"
            />
          </div>
          <h1
            className=" mb-5 pt-3"
            style={{ fontSize: "1.7rem", fontWeight: "700" }}
          >
            good job!
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            it's great to hear you enjoyed your PAUSE.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            how about sharing it with some friends?
          </p>
        </section>
        <section className="d-flex mx-3 justify-content-around">
          <div>
            <img alt="Facebook" src={FacebookIcon} />
          </div>
          <div>
            <img alt="Instagram" src={InstagramIcon} />
          </div>
          <div>
            <img alt="Twitter" src={TwitterIcon} />
          </div>
        </section>
      </div>
    );
  }
}
