import { useState, useEffect } from "react";
import api from "../../apis/api";

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
    <div className="admin-list mt-5">
      <h1>Activities List</h1>

      <ul class="list-group list-group-flush mt-5">
        {activityList.map((activity) => (
          <li class="list-group-item">{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}
