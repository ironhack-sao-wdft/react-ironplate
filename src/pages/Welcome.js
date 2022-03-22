import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import logo from "../assets/img/logo.svg";

export default function Welcome() {
  const props = useSpring({
    config: { duration: 6000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <div className="container">
      <animated.div style={props}>
        <Link style={{ textDecoration: "none" }} to="/description">
          <img
            src={logo}
            alt="pause symbol"
            style={{ height: "50px", width: "auto" }}
          />
          <h1
            style={{
              fontSize: "70px",
              color: "#FBF8F3",
              marginTop: "30px",
              fontFamily: "Arima Madurai, cursive",
            }}
          >
            PAUSE
          </h1>
        </Link>
      </animated.div>
    </div>
  );
}
