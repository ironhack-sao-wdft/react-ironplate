import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Navbar from "./Navbar";


// Livros
import CreateBook from '../pages/Books/CreateBook'

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <div>
      <Navbar />
      <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/book/create" element={<ProtectedRoute component={CreateBook} />} />
      </Routes>
      </div>
      </div>
      
    </AuthContextComponent>
  );
}

export default App;
