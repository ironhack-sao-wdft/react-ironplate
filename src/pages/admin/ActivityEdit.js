import { useState, useEffect } from "react";
import api from "../../apis/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ActivityEdit() {
  const [activityData, setActivityData] = useState({
    name: "",
    type: "",
    duration: 0,
    description: "",
    instructions: "",
    media: new File([], ""),
    mediaURL: "",
    mediaType: "",
    creatorName: "",
    creatorURL: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await api.get(`/activities/${id}`);
        delete response.data._id;
        setActivityData({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchSession();
  }, [id]);

  function handleChange(e) {
    if (e.target.files) {
      return setActivityData({
        ...activityData,
        [e.target.name]: e.target.files[0],
      });
    }
    setActivityData({ ...activityData, [e.target.name]: e.target.value });
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const mediaURL = await handleFileUpload(activityData.media);
      const formData = { ...activityData };
      delete formData.media;

      const response = await api.patch(`/activities/${id}`, {
        ...formData,
        mediaURL,
      });

      console.log(response);
      setLoading(false);

      navigate("/submissioncomplete");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && navigate("/loadingpage")}
      <div className="buttons-to mt-5">
        <Link to={`/activitylist`}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
        </Link>
      </div>
      <div className="entry-card m-4 shadow-lg p-1 mb-5">
        <form>
          <div className="p-2">
            <input
              name="name"
              id="name"
              placeholder="Insert a new title"
              onChange={handleChange}
              value={activityData.name}
              required
            />
          </div>
          <div className="p-2">
            <input
              name="creatorName"
              id="creatorName"
              placeholder="Pause partner"
              onChange={handleChange}
              value={activityData.creatorName}
            />
            *
          </div>
          <div className="p-2">
            <input
              name="creatorURL"
              id="creatorURL"
              placeholder="Pause partner website"
              onChange={handleChange}
              value={activityData.creatorURL}
            />
            *
          </div>
          <div
            style={{
              fontSize: "12px",
              lineHeight: "12px",
              marginBottom: "20px",
            }}
          >
            <span>
              * These fields do not need to be answered. When empty they will
              automatically be converted to system default values.
            </span>
          </div>
          <div className="col-auto my-1">
            <select
              className="custom-select mr-sm-2"
              name="type"
              id="type"
              onChange={handleChange}
              value={activityData.type}
              required
            >
              <option selected>Type</option>
              <option value="indoors">indoors</option>
              <option value="outdoors">outdoors</option>
            </select>
          </div>
          <div className="col-auto my-1">
            <select
              type="number"
              className="custom-select mr-sm-2"
              id="duration"
              name="duration"
              onChange={handleChange}
              value={activityData.duration}
              required
            >
              <option selected>Duration</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
              <option value="25">25 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          </div>

          <div className="input-group">
            <textarea
              className="form-control"
              id="description"
              placeholder="describe the activity"
              name="description"
              onChange={handleChange}
              value={activityData.description}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              className="form-control"
              id="instructions"
              placeholder="provide the necessary instructions"
              name="instructions"
              onChange={handleChange}
              value={activityData.instructions}
              required
            />
          </div>
          <div className="col-auto my-1">
            <select
              className="custom-select mr-sm-2"
              name="mediaType"
              id="mediaType"
              onChange={handleChange}
              value={activityData.mediaType}
              required
            >
              <option selected>Media Type</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
              <option value="image">Image</option>
            </select>
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
              Media
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-light btn-lg"
            style={{
              background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
              border: 0,
              borderRadius: "10px",
              color: "#3A3938",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
