import { useState, useEffect } from "react";
import api from "../../apis/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ActivityEdit() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

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

      if (activityData.media) {
        const mediaURL = await handleFileUpload(activityData.media);
        const formData = { ...activityData };
        delete formData.media;

        const response = await api.patch(`/activities/${id}`, {
          ...formData,
          mediaURL,
        });
      } else {
        const formData = { ...activityData };

        delete formData.mediaURL;
        delete formData.media;
        const response = await api.patch(`/activities/${id}`, { ...formData });
      }

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
        <Link to={`/adminpanel`}>
          <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
        </Link>
      </div>
      <div className="entry-card shadow-lg m-5">
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <div className="p-2">
            <input
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                border: "none",
                color: "rgba(150, 83, 83, 1)",
              }}
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
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                border: "none",
                color: "rgba(150, 83, 83, 1)",
              }}
              name="creatorName"
              id="creatorName"
              placeholder="Pause partner*"
              onChange={handleChange}
              value={activityData.creatorName}
            />
          </div>
          <div className="p-2">
            <input
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                border: "none",
                color: "rgba(150, 83, 83, 1)",
              }}
              name="creatorURL"
              id="creatorURL"
              placeholder="Pause partner website*"
              onChange={handleChange}
              value={activityData.creatorURL}
            />
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
            <Select
              displayEmpty
              name="type"
              id="type"
              onChange={handleChange}
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                color: "rgba(150, 83, 83, 1)",
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              value={activityData.type}
              label="Duration"
              required
            >
              <MenuItem disabled value="">
                <em>Type</em>
              </MenuItem>
              <MenuItem value="indoors">indoors</MenuItem>
              <MenuItem value="outdoors">outdoors</MenuItem>
            </Select>
          </div>

          <div className="col-auto my-1">
            <Select
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                color: "rgba(150, 83, 83, 1)",
              }}
              displayEmpty
              type="number"
              labelId="duration-label"
              id="duration"
              name="duration"
              className="my-2"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={activityData.duration}
              label="duration"
              onChange={handleChange}
              required
            >
              <MenuItem value="">
                <em>Duration</em>
              </MenuItem>
              <MenuItem value={15}>15 minutes</MenuItem>
              <MenuItem value={20}>20 minutes</MenuItem>

              <MenuItem value={25}>25 minutes</MenuItem>
              <MenuItem value={30}>30 minutes</MenuItem>
            </Select>
          </div>

          <div className="input-group">
            <textarea
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                border: "none",
                color: "rgba(150, 83, 83, 1)",
              }}
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
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                border: "none",
                color: "rgba(150, 83, 83, 1)",
              }}
              className="form-control my-2"
              id="instructions"
              placeholder="provide the necessary instructions"
              name="instructions"
              onChange={handleChange}
              value={activityData.instructions}
              required
            />
          </div>
          <div className="col-auto my-1">
            <Select
              displayEmpty
              name="mediaType"
              id="mediaType"
              onChange={handleChange}
              style={{
                backgroundColor: "#FFF9F0",
                borderRadius: "10px",
                color: "rgba(150, 83, 83, 1)",
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              value={activityData.mediaType}
              label="Media Type"
              required
            >
              <MenuItem disabled value="">
                <em>Media Type</em>
              </MenuItem>
              <MenuItem value="video">Video</MenuItem>
              <MenuItem value="audio">Audio</MenuItem>
              <MenuItem value="image">Image</MenuItem>
            </Select>
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
              color: "#965353",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </FormControl>
      </div>
    </div>
  );
}
