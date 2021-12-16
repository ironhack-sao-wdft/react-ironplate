import { useState } from "react";
import api from "../../apis/api";
import { useNavigate, Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Select from "@mui/material/Select";

export default function ActivityCreate() {
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
    duration: "",
    description: "",
    instructions: "",
    media: new File([], ""),
    mediaURL: "",
    mediaType: "",
    creatorName: "",
    creatorURL: "",
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
      const mediaURL = await handleFileUpload(activityData.media);
      const formData = { ...activityData };
      delete formData.media;

      const response = await api.post("/activities", {
        ...formData,
        mediaURL,
      });

      console.log(response);
      navigate("/submissioncomplete");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="buttons-to mt-5">
        <Link to={`/adminpanel`}>
          <button
            className="btn btn-light btn-lg"
            style={{ color: "rgba(150, 83, 83, 1)" }}
          >
            Back to Admin Panel
          </button>
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
            {/* <select
              className="custom-select mr-sm-2"
              name="mediaType"
              id="mediaType"
              onChange={handleChange}
              value={activityData.mediaType}
              required
            > */}
            <FormLabel style={{ color: "#FFF9F0" }} component="legend">
              Media Type
            </FormLabel>
            <RadioGroup
              className="d-flex justify-content-center"
              row
              aria-label="gender"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="audio"
                control={<Radio />}
                label="audio"
              />
              <FormControlLabel
                value="image"
                control={<Radio />}
                label="image"
              />
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="video"
              />
            </RadioGroup>
            {/* <option selected>Media Type</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
              <option value="image">Image</option>
            </select> */}
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
        </FormControl>
      </div>
    </div>
  );
}
