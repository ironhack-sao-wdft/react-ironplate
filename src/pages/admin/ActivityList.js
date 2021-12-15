import { useState, useEffect } from "react";
import api from "../../apis/api";
import { Link } from "react-router-dom";

export default function ActivityList() {
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await api.get("/activities");

        setActivityList([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchActivities();
  }, []);

  console.log(activityList);

  return (
    <div>
      <div className="buttons-to mt-5">
        <Link to={`/adminpanel`}>
          <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
            Back to Admin Panel
          </button>
        </Link>
      </div>
      <div className="admin-list mt-5">
        <h1>Activities List</h1>

        <ul className="list-group list-group-flush mt-5">
          {activityList.map((activity) => (
            <Link
              key={activity._id}
              style={{ textDecoration: "none" }}
              to={`/detailsfromactivity/${activity._id}`}
            >
              <li className="list-group-item">{activity.name}</li>{" "}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
