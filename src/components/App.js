import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Welcome from "../pages/Welcome";
import Description from "../pages/Description";
import ActivityDetail from "../pages/ActivityDetail";
import FeedbackEmoji from "../pages/FeedbackEmoji";
import Profile from "../pages/Profile";
import AdminPanel from "../pages/admin/AdminPanel";
import ActivityCreate from "../pages/admin/ActivityCreate";

import { AuthContextComponent } from "../contexts/authContext";
import SubmissionComplete from "../pages/admin/SubmissionComplete";
import ActivityList from "../pages/admin/ActivityList";
import DetailsFromActivity from "../pages/admin/DetailsFromActivity";
import ActivityEdit from "../pages/admin/ActivityEdit";
import ActivityDelete from "../pages/admin/ActivityDelete";
import UserProfile from "../pages/user/UserProfile";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route
          path="/activitydelete/:id"
          element={<ProtectedRoute component={ActivityDelete} />}
        />
        <Route
          path="/activityedit/:id"
          element={<ProtectedRoute component={ActivityEdit} />}
        />

        <Route
          path="/detailsfromactivity/:id"
          element={<ProtectedRoute component={DetailsFromActivity} />}
        />
        <Route
          path="/activitycreate"
          element={<ProtectedRoute component={ActivityCreate} />}
        />
        <Route
          path="/adminpanel"
          element={<ProtectedRoute component={AdminPanel} />}
        />
        <Route
          path="/userprofile"
          element={<ProtectedRoute component={UserProfile} />}
        />
        <Route path="/submissioncomplete" element={<SubmissionComplete />} />
        <Route path="/activitylist" element={<ActivityList />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/feedback" element={<FeedbackEmoji />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
