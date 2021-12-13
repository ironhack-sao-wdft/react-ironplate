import mock from "../assets/mock/mock.json";

export default function ActivityMedia(props) {
  const timer = mock.duration;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <section>
        <p>you are currently in</p>
        <h1>{mock.name}</h1>
      </section>

      <section>
        <img style={{ width: "205px" }} src={mock.mediaURL} alt={mock.name} />
      </section>
      <footer>
        <small>end activity</small>
      </footer>
    </div>
  );
}
