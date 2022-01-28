import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBook from "../pages/Books/CriaBook";
import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import DetailBook from "../pages/Books/DetailBook";
import EditBook from "../pages/Books/EditBook";
import DeleteBook from "../pages/Books/DeleteBook";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/create-book"
          element={<ProtectedRoute component={CreateBook} />}
        />
        <Route path="/book/detail-book/:id" element={<DetailBook />} />
        <Route
          path="/update-book/:id"
          element={<ProtectedRoute component={EditBook} />}
        />
        <Route
          path="/delete-book/:id"
          element={<ProtectedRoute component={DeleteBook} />}
        />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
