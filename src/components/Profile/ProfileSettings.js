export default function ProfileSettings() {
  return (
    <div>
      <div className="mt-5">
        <h3
          style={{ fontSize: "1.5rem", textAlign: "center", color: "#FBF8F3" }}
        >
          change your profile picture
        </h3>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="px-4 py-2 mt-4"
          style={{
            background: "linear-gradient(0deg, #FFF9F0, #FFF9F0)",
            border: 0,
            borderRadius: "10px",
            color: "#3A3938",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          upload
        </button>
      </div>
    </div>
  );
}
