import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container m-4 shadow-lg p-1 mb-5">
        <div className="home-card-top">
          <p style={{ fontSize: "16px" }}>suggestions to do</p>
          <p style={{ fontSize: "36px" }}>at home</p>
        </div>
        <div style={{ color: "white" }}>let’s pause for a bit?</div>
        <div className="home-card-bot">
          <p style={{ fontSize: "16px" }}>suggestions to go</p>
          <p style={{ fontSize: "36px" }}>outdoors</p>
        </div>
      </div>
    </div>
  );
}
