import { useState, useContext } from "react";
import api from "../../apis/api";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ChangeUserInfo() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const pictureURL = await handleFileUpload(state.media);
      const formData = { ...state };
      delete formData.media;

      const response = await api.patch(`/profile/${loggedInUser.user._id}`, {
        ...formData,
        pictureURL,
      });

      setState({ ...state });
      setErrors({ name: "" });
      setLoading(false);
      navigate("/submissioneditcomplete");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        setLoading(false);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && navigate("/loadingpage")}
      <div className="buttons-to mt-5">
        <Link to={`/profile`}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
        </Link>
      </div>
      <div className="admin-content m-4 shadow-lg p-1 mb-5">
        <div className="admin-list">
          <form>
            <div className="p-2">
              <label htmlFor="signupFormName">Change your Name:</label>
              <input
                type="text"
                name="name"
                id="signupFormName"
                error={errors.name}
                placeholder={loggedInUser.user.name}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">Upload a new photo:</div>
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
      </div>
    </div>
  );
}
