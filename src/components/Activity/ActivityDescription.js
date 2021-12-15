import { useState } from "react";
import api from "../../apis/api";
import { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import ActivityInfo from "./ActivityInfo";
import { AuthContext } from "../../contexts/authContext";

export default function ActivityDescription(props) {
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  const [currentActivity, setCurrentActivity] = useState({});
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  // useEffect(() => {
  //   async function loadActivities() {
  //     try {
  //       const loadedActivities = await props.activitiesToShow;
  //       console.log(loadedActivities);
  //       return loadedActivities;
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   loadActivities();
  // }, []);

  async function handleBlock(currentOption) {
    if (!props.blockedActivities.includes(currentOption)) {
      api.patch("/profile/:id", async (req, res) => {
        const result = await req.body.blockedActivities;
        res.json(...result, currentOption._id);
      });
    }
  }

  // function handleBlock(currentOption) {
  //   if (!blockedActivities.includes(currentOption.id)) {
  //     setBlockedActivities([...blockedActivities, currentOption.id]);
  //   }
  //   console.log(blockedActivities);
  // }

  return (
    <div>
      {!descriptionToggle ? (
        <div>
          <section className="d-flex flex-column justify-content-center align-items-center pb-5">
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "400",
                color: "#FBF8F3",
              }}
            >
              today's
            </span>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "400",
                color: "#FBF8F3",
              }}
            >
              suggestions
            </span>
          </section>
          <section className="d-flex flex-column align-items-center">
            <div
              style={{
                width: "70%",
                height: "3vh",
                background: "#FFF9F0",
                borderRadius: "15px 15px 0px 0px",
                opacity: "0.72",
                boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
            <div
              style={{
                width: "80%",
                height: "4vh",
                background: "#FFF9F0",
                borderRadius: "15px 15px 0px 0px",
                opacity: "0.85",
                boxShadow: "10px 4px 20px 5px rgba(0, 0, 0, 0.25)",
              }}
            ></div>
          </section>
          <div style={{ boxShadow: "100px 0px 0px 0px rgba(0, 0, 0, 0.25)" }}>
            <ActivityCard
              setDescriptionToggle={setDescriptionToggle}
              setCurrentActivity={setCurrentActivity}
              setCurrentActivityIndex={setCurrentActivityIndex}
              cardArr={props.activitiesToShow}
              handleBlock={handleBlock}
            />
          </div>{" "}
        </div>
      ) : (
        <ActivityInfo
          setDescriptionToggle={setDescriptionToggle}
          currentActivity={currentActivity}
          currentActivityIndex={currentActivityIndex}
        />
      )}
    </div>
  );
}
