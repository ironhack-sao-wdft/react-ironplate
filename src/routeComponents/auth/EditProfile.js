import { useState, useEffect } from "react";
import api from "../../apis/api";

function EditProfile(props) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    image: "",
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);
  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.put("/profile", {
        ...state,
      });

      setError(null);
      props.history.push("/profile");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
  }
  return (
    <div className="container mt-5">
      <h1>"Oi"</h1>
      <h1 className="pt-3">Perfil</h1>
      <hr />
      <div className="row d-flex justify-content-sm-start align-items-center">
        <img
          className="img-fluid rounded-circle"
          style={{ maxWidth: "150px" }}
          src={state.image}
          alt="Sua foto de perfil"
        />

        <div class="d-flex flex-column bd-highlight mb-3 ml-5">
          <p>
            <strong>Nome: </strong>
            {state.name}
          </p>

          <p>
            <strong>Sobrenome: </strong>
            {state.lastName}
          </p>

          <p>
            <strong>E-mail: </strong>
            {state.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
