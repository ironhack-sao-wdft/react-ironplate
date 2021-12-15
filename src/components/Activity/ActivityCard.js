import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function ActivityCard(props) {
  useEffect(() => {
    async function loadActivities() {
      try {
        const loadedActivities = await props.cardsArr;
      } catch (err) {
        console.error(err);
      }
    }
    loadActivities();
  }, []);

  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      animation={"fade"}
      autoPlay={false}
      indicators={false}
      NavButton={({ onClick, next, prev }) => {
        return (
          <>
            <Button
              onClick={onClick}
              className="mx-5 d-flex justify-content-center align-items-center"
              style={{
                top: "86%",
                left: "15%",
                opacity: "0",
              }}
            >
              {next && "next card"}
            </Button>
            <Button
              className=""
              style={{
                top: "20%",
                left: "15%",
                opacity: "0",
              }}
            >
              {prev && "previous card"}
            </Button>
          </>
        );
      }}
    >
      {props.cardArr.map((currentOption, index) => {
        props.setCurrentActivity(currentOption);
        return (
          <div className="" key={currentOption.name}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div
                className="mb-4 pb-4"
                style={{
                  backgroundColor: "#FFF9F0",
                  boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  width: "90%",
                  height: "50vh",
                }}
              >
                {props.setCurrentActivityIndex(index + 1)}
                <div className="mb-5 pb-5">
                  <section className="d-flex flex-column justify-content-center align-items-center pt-4 pb-3">
                    <strong
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      className="d-flex justify-content-center align-items-center pb-5"
                    >
                      option {index + 1}
                    </strong>
                    <h3>
                      <strong
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                      >
                        {currentOption.name}
                      </strong>
                    </h3>
                    <p style={{ fontSize: "1.2rem" }}>
                      {currentOption.duration} min
                    </p>
                  </section>

                  <section className="d-flex flex-column justify-content-center align-items-center">
                    <button
                      onClick={props.setDescriptionToggle}
                      className="px-4 py-3 mt-3"
                      style={{
                        background: "linear-gradient(0deg, #965353, #965353)",
                        border: 0,
                        borderRadius: "10px",
                        color: "#FBF8F3",
                      }}
                    >
                      more info
                    </button>
                  </section>

                  <section className="d-flex mx-3 mt-4 justify-content-between align-items-center">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#3A3938",
                        fontSize: "1.2rem",
                      }}
                      onClick={() => {
                        props.handleBlock(currentOption);
                      }}
                    >
                      block
                    </button>
                    <button className="d-none">next card</button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
