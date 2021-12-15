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
import ActivityDescription from "../pages/ActivityDescription";
import FeedbackEmoji from "../pages/FeedbackEmoji";
import Profile from "../pages/Profile";
import AdminPanel from "../pages/admin/AdminPanel";
import ActivityEdit from "../pages/admin/ActivityEdit";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/activityedit" element={<ActivityEdit />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activity" element={<ActivityDescription />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/feedback" element={<FeedbackEmoji />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
