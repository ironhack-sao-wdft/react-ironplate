export default function ProfiledBlocked() {
  const temporaryBlocked = ["dance party", "reading", "breathing exercise"];

  return (
    <div>
      <section className="mt-5 mx-4 px-4 d-flex justify-content-between align-items-center">
        <h3 style={{ fontSize: "1.5rem", color: "#FBF8F3" }}>
          blocked activities
        </h3>
        <small style={{ fontSize: "1rem", color: "#FBF8F3" }}>edit</small>
      </section>
      <section className="d-flex justify-content-center">
        <div
          className="pt-2"
          style={{
            backgroundColor: "#FFF9F0",
            boxShadow: "0px 4px 20px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            width: "90%",
            height: "48vh",
          }}
        >
          <div className="pt-4">
            {temporaryBlocked.map((currentActivity, index) => {
              if (index + 1 < temporaryBlocked.length) {
                return (
                  <h3
                    className="ms-4"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      paddingBottom: "8px",
                      borderBottom: "1px solid rgba(59, 59, 51, 1)",
                      width: "86%",
                    }}
                    key={currentActivity}
                  >
                    {currentActivity}
                  </h3>
                );
              } else {
                return (
                  <h3
                    className="ms-4"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      paddingBottom: "8px",
                      width: "86%",
                    }}
                    key={currentActivity}
                  >
                    {currentActivity}
                  </h3>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
