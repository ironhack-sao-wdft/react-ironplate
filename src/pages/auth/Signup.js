import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Your password must have at least 8 characters with uppercase, numeric and special."
      );
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleChangePW(event) {
    validate(event.target.value);
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <div className="login-container m-4 shadow-lg p-1 mb-5">
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <label htmlFor="signupFormName" />
          <input
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            error={errors.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

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
            onChange={handleChangePW}
            placeholder="Your password"
          />
        </div>
        {
          <span
            style={{
              color: "white",
              fontSize: "14px",
            }}
          >
            {errorMessage}
          </span>
        }

        <button
          class="btn btn-white"
          style={{ marginTop: "-99px", marginLeft: "230px", border: "none" }}
          onClick={togglePassword}
        >
          <VisibilityIcon sx={{ color: "#965353" }} />
        </button>

        <div className="p-4">
          <button
            className="btn btn-light btn-lg"
            type="submit"
            style={{ color: "#965353" }}
          >
            Signup
          </button>
        </div>
        <div className="p-4">
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <p>Already have an account?</p>
            <p> Click here to login!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
