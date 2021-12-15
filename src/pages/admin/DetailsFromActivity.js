import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../apis/api";

export default function DetailsFromActivity() {
  const { id } = useParams();

  const [activityData, setActivityData] = useState({
    name: "",
    type: "",
    duration: 0,
    description: "",
    instructions: "",
    media: new File([], ""),
    mediaURL: "",
    mediaType: "",
  });

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await api.get(`/activities/${id}`);

        setActivityData({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchActivity();
  }, [id]);

  return (
    <div>
      <div className="buttons-to mt-5">
        <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
          Edit
        </button>
        <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
          Delete
        </button>
      </div>
      <div className="admin-container m-5">
        <div className="admin-list">
          <h1 className="m-5">{activityData.name}</h1>
          <h2>{activityData.type}</h2>
          <h2>{activityData.duration} min</h2>
          <p className="mt-5" style={{ fontSize: "18px" }}>
            {activityData.description}
          </p>
          <p style={{ fontSize: "18px" }}>{activityData.instructions}</p>
          <a rel="noreferrer" target="_blank" href={activityData.mediaURL}>
            <p style={{ fontSize: "18px" }}>
              Click to view attached {activityData.mediaType}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
