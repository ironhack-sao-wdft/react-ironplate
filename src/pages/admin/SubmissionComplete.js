import { Link } from "react-router-dom";

export default function SubmissionComplete() {
  return (
    <div>
      <div>
        <div className="mt-5">Submission Complete!</div>
        <Link to="/adminpanel">
          <button
            className="btn btn-light btn-lg mt-5"
            style={{ color: "#965353" }}
          >
            Back to Admin Panel
          </button>
        </Link>
      </div>
    </div>
  );
}
