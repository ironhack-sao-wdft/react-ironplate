import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Welcome() {
  const props = useSpring({
    config: { duration: 8000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <div>
      <animated.div style={props}>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1
            className="container"
            style={{
              fontSize: "70px",
              color: "#FBF8F3",
            }}
          >
            PAUSE
          </h1>
        </Link>
      </animated.div>
    </div>
  );
}
