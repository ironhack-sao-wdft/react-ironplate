import Navbar from "./Navbar";
import emojiPopper from "../assets/images/emojiPopper.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          <button
            className="px-5 py-3 mb-4"
            style={{
              background: "linear-gradient(0deg, #FFF9F0, #FFF9F0);",
              border: 0,
              borderRadius: "10px",
              color: "#3A3938",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            yes, please!
          </button>
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
        </section>
      </div>
    );
  } else {
    return (
      <div style={{ color: "#FBF8F3" }}>
        <section>
          <img src={emojiPopper} alt="Positive feedback" />
          <h1>good job!</h1>
          <p>it's great to hear you enjoyed your PAUSE.</p>
          <p>how about sharing it with some friends?</p>
        </section>
        <section className="d-flex mx-2 justify-content-between">
          <button>
            <FacebookIcon />
          </button>
          <button>
            <InstagramIcon />
          </button>
          <button>
            <TwitterIcon />
          </button>
        </section>
      </div>
    );
  }
}
