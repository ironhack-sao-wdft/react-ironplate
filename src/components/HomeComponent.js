export default function HomeComponent(props) {
  return (
    <div className="home-container m-4 shadow-lg p-1 mb-5">
      <div
        onClick={() => {
          props.selectRandomOption(props.indoorsArr);
          props.setPageState("activities");
        }}
        className="home-card-top"
      >
        <p style={{ fontSize: "16px" }}>suggestions to do</p>
        <p style={{ fontSize: "36px" }}>at home</p>
      </div>
      <div style={{ color: "white" }}>let’s pause for a bit?</div>
      <div
        onClick={() => {
          props.selectRandomOption(props.outdoorsArr);
          props.setPageState("activities");
        }}
        className="home-card-bot"
      >
        <p style={{ fontSize: "16px" }}>suggestions to go</p>
        <p style={{ fontSize: "36px" }}>outdoors</p>
      </div>
    </div>
  );
}
