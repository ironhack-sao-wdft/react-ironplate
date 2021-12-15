import mock from "../assets/mock/mock.json";
import Navbar from "../components/Navbar";
import { useState } from "react";

import ActivityCard from "../components/Activity/ActivityCard";
import ActivityInfo from "../components/Activity/ActivityInfo";

export default function ActivityDescription() {
  const cardArr = [];
  const [blockedActivities, setBlockedActivities] = useState([1, 0, 2, 999]);
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  const [currentActivity, setCurrentActivity] = useState({});
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  function handleBlock(currentOption) {
    if (!blockedActivities.includes(currentOption.id)) {
      setBlockedActivities([...blockedActivities, currentOption.id]);
    }
    selectRandomOption();
    console.log(blockedActivities);
  }

  function selectRandomOption() {
    for (let i = 0; cardArr.length < 3; i++) {
      let randomOption = mock[Math.floor(Math.random() * mock.length)];
      if (
        !cardArr.includes(randomOption) &&
        randomOption !== undefined &&
        !blockedActivities.includes(randomOption.id)
      ) {
        cardArr.push(randomOption);
        console.log(cardArr);
      }
    }
  }

  selectRandomOption();

  return (
    <div>
      {!descriptionToggle ? (
        <div>
          <div className="mx-3">
            <Navbar />
          </div>
          <section className="d-flex flex-column justify-content-center align-items-center pb-5">
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "400",
                color: "#FBF8F3",
              }}
            >
              today's{" "}
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
              cardArr={cardArr}
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
