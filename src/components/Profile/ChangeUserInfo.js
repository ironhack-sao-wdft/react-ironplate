import { useState, useContext } from "react";
import api from "../../apis/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function ChangeUserInfo() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);

  const [state, setState] = useState({
    name: `${loggedInUser.user.name}`,
    media: new File([], ""),
    pictureURL: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  function handleChange(e) {
    if (e.target.files) {
      return setState({
        ...state,
        [e.target.name]: e.target.files[0],
      });
    }
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("media", file);

      const response = await api.post("/upload", uploadData);

      console.log(response);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const pictureURL = await handleFileUpload(state.media);
      const formData = { ...state };
      delete formData.media;

      const response = await api.patch(`/profile/${loggedInUser.user._id}`, {
        ...formData,
        pictureURL,
      });
      console.log(
        "esse aqui é responde, porque a gente está com bastante console",
        response
      );
      setState({ ...state });
      setErrors({ name: "" });
      navigate("/profile");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <div className="entry-card m-4 shadow-lg p-1 mb-5">
      <form>
        <div className="p-2">
          <label htmlFor="signupFormName" />
          <input
            type="text"
            name="name"
            id="signupFormName"
            error={errors.name}
            placeholder={loggedInUser.user.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="media"
            name="media"
            onChange={handleChange}
          />
          <label className="input-group-text" htmlFor="media">
            Picture
          </label>
        </div>
        <div className="p-4">
          <button
            onClick={handleSubmit}
            className="btn btn-light btn-lg"
            type="submit"
            style={{ color: "#965353" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
