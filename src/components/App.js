import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Welcome from "../pages/Welcome";
import Description from "../pages/Description";
import ActivityDescription from "../pages/ActivityDescription";
import ActivityMedia from "../pages/ActivityMedia";
import AdminPainel from "../pages/admin/AdminPainel";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/adminpainel" element={<AdminPainel />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route path="/description" element={<Description />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activity" element={<ActivityDescription />} />
        <Route path="/activity/:id" element={<ActivityMedia />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
