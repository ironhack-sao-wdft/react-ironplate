import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../apis/api";
import DeleteModal from "../../components/DeleteModal";

export default function DetailsFromActivity() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const [showModal, setShowModal] = useState(false);

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
        <Link to={`/activitylist`}>
          <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
            Back to Activities List
          </button>
        </Link>
      </div>
      <div className="buttons-to mt-5">
        <Link to={`/activityedit/${activityData._id}`}>
          <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
            Edit
          </button>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-light btn-lg"
          style={{ color: "#965353" }}
        >
          Delete
        </button>
      </div>
      <div className="admin-container m-5">
        <div className="admin-list">
          <h1 className="m-5">{activityData.name}</h1>
          <h2>{activityData.type}</h2>
          <h2>{activityData.duration} min</h2>
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://${activityData.creatorURL}`}
          >
            <h4>{activityData.creatorName}</h4>
          </a>
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
      <DeleteModal
        title="Are you sure you would like to delete this activity?"
        variant="danger"
        confirmationText="Delete"
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirmation={() => {
          navigate(`/activitydelete/${id}`);
          setShowModal(false);
        }}
      >
        This action is irreversible. Data from this activity cannot be
        retrieved.
      </DeleteModal>
    </div>
  );
}
