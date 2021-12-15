import { useState } from "react";
import api from "../../apis/api";
import { useNavigate } from "react-router-dom";

export default function ActivityEdit() {
  const [activityData, setActivityData] = useState({
    name: "",
    type: "",
    duration: 0,
    description: "",
    instructions: "",
    video: new File([], ""),
    videoURL: "",
  });

  const navigate = useNavigate();

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

      uploadData.append("video", file);

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
      const videoURL = await handleFileUpload(activityData.video);

      const response = await api.post("/activities", {
        ...activityData,
        videoURL,
      });

      console.log(response);
      navigate("/submissioncomplete");
    } catch (err) {
      console.error(err);
    }
  }

  return (
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
        <hr />
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
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="video"
            name="video"
            onChange={handleChange}
          />
          <label className="input-group-text" htmlFor="video">
            Video
          </label>
        </div>
        <hr />
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-light btn-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
