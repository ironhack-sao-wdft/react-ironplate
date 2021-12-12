import Navbar from "./Navbar";
import emojiPopper from "../assets/images/emojiPopper.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FeedbackResponse(props) {
  if (props.response !== "bad") {
    return (
      <div>
        <Navbar />
        <section>
          <h1>oh no!</h1>
          <p>we're sorry your PAUSE didn't go as expected.</p>
          <p>would you like to try another activity?</p>
        </section>
        <section>
          <button>yes, please</button>
          <button>no, thanks</button>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
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
