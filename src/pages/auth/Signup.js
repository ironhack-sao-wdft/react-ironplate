import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";

import FormField from "../../components/Form/FormField";
import ErrorAlert from "../../components/ErrorAlert";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // Loading
  const [loading, setLoading] = useState(false);
  // Tratamento do erro
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      return setError("Senha e confirmação diferentes.");
    }

    try {
      setLoading(true);
      setError(null);

      const response = await api.post("/signup",
        userData
      );

      console.log(response);

       setLoading(false);

      navigate("/login");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
        setError(err.response.data);
      }
    }
  }

  return (
    <div>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome completo"
          id="signupFormName"
          required
          name="name"
          onChange={handleChange}
          value={userData.name}
          readOnly={loading}
        />

        <FormField
          type="email"
          label="E-mail"
          id="signupFormEmail"
          required
          name="email"
          onChange={handleChange}
          value={userData.email}
          readOnly={loading}
        />

        <FormField
          type="password"
          label="Senha"
          id="signupFormPassword"
          required
          name="password"
          onChange={handleChange}
          value={userData.password}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
          readOnly={loading}
        />

        <FormField
          type="password"
          label="Confirme sua senha"
          id="signupFormConfirmPassword"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={userData.confirmPassword}
          readOnly={loading}
        />

        <div className="mb-3">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            Cadastrar
          </button>
        </div>

        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </div>
  );
}

export default Signup;