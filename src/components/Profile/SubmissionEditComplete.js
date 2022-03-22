import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

export default function SubmissionEditComplete() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <div className="admin-list mt-5">
        <h1 className="mt-5">Submission Complete!</h1>
        <div className="mt-5">
          It's necessary to log in again for the changes to be applied.
        </div>

        <button
          onClick={logout}
          className="btn btn-light btn-lg mt-5"
          style={{ color: "#965353" }}
        >
          Log off
        </button>
      </div>
    </div>
  );
}
