import NavbarActivity from "../NavbarActivity";

export default function ActivityInfo(props) {
  return (
    <div>
      <NavbarActivity setDescriptionToggle={props.setDescriptionToggle} />
      <div className="d-flex justify-content-center ">
        <div
          className="mb-4 pb-4 d-flex flex-column align-items-center justify-content-between"
          style={{
            backgroundColor: "#FFF9F0",
            boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            width: "90%",
            height: "75vh",
          }}
        >
          <section>
            <h3
              style={{ fontSize: "1.2rem", fontWeight: "700" }}
              className="text-center my-4 py-3"
            >
              option {props.currentActivityIndex}
            </h3>
            <h2
              style={{ fontSize: "1.8rem", fontWeight: "700" }}
              className="text-center"
            >
              {props.currentActivity.name}
            </h2>
            <p style={{ fontSize: "1.2rem" }} className="text-center">
              {props.currentActivity.duration} min
            </p>
          </section>
          <section className="mx-4">
            <p
              className="text-center mb-4"
              style={{ fontSize: "1.1rem", color: "rgba(72, 71, 70, 1)" }}
            >
              {props.currentActivity.description}
            </p>
            <p
              className="text-center mb-4 pb-3"
              style={{ fontSize: "1.1rem", color: "rgba(72, 71, 70, 1)" }}
            >
              {props.currentActivity.instructions}
            </p>
          </section>
          <section className="">
            <button
              className="px-4 py-3 mb-4"
              style={{
                background: "linear-gradient(0deg, #965353, #965353)",
                border: 0,
                borderRadius: "10px",
                color: "#FBF8F3",
              }}
            >
              start activity
            </button>
          </section>

          {/* <section>
            <p>you are currently in</p>
            <h1>{mock.name}</h1>
          </section> */}

          {/* <section>
            <img
              style={{ width: "205px" }}
              src={mock.mediaURL}
              alt={mock.name}
            />
          </section> */}
          {/* <footer>
            <small>end activity</small>
          </footer> */}
        </div>
      </div>
    </div>
  );
}
