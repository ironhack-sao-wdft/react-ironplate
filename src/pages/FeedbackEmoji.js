import mock from "../assets/mock/mock.json";
import emojiHeartEyes from "../assets/images/emojiHeartEyes.png";
import emojiHappy from "../assets/images/emojiHappy.png";
import emojiSad from "../assets/images/emojiSad.png";

export default function FeedbackEmoji() {
  const pauseType = mock.type === "indoors" ? "INDOOR PAUSE" : "OUTDOOR PAUSE";

  return (
    <div>
      <section>
        <h2>congratulations!</h2>
        <p>you just finished your {pauseType}</p>
      </section>
      <section>
        <p>how did that feel like?</p>
      </section>
      <section>
        <div style={{ width: "90px", height: "90px" }}>
          <img
            style={{ width: "50px", height: "50px" }}
            src={emojiHeartEyes}
            alt="Very good"
          />
        </div>
        <div style={{ width: "90px", height: "90px" }}>
          <img
            style={{ width: "50px", height: "50px" }}
            src={emojiHappy}
            alt="Good"
          />
        </div>
        <div style={{ width: "90px", height: "90px" }}>
          <img
            style={{ width: "50px", height: "50px" }}
            src={emojiSad}
            alt="Not good"
          />
        </div>
      </section>
    </div>
  );
}
