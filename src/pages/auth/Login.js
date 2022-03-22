import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AuthContext } from "../../contexts/authContext";

function Login() {
  const authContext = useContext(AuthContext);

  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser.token && loggedInUser.user.role === "ADMIN") {
      navigate("/adminpanel");
    } else if (loggedInUser.token && loggedInUser.user.role === "USER") {
      navigate("/home");
    }
  }, [loggedInUser, navigate]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="login-container m-4 shadow-lg p-1 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <label htmlFor="signupFormEmail" />
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
            placeholder="Your e-mail"
          />
        </div>

        <div className="p-2">
          <label htmlFor="signupFormPassword" />
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
            placeholder="Your password"
          />
        </div>
        <button
          class="btn btn-white"
          style={{ marginTop: "-99px", marginLeft: "230px", border: "none" }}
          onClick={togglePassword}
        >
          <VisibilityIcon sx={{ color: "#965353" }} />
        </button>

        <div className="p-4">
          <button
            className="btn btn-light btn-lg "
            type="submit"
            style={{ color: "#965353" }}
          >
            Login
          </button>
        </div>
        <div className="p-4">
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            <p>Don't have an account?</p>
            <p> Click here to signup!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
