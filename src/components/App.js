import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Navbar from "./Navbar"
import BookDetail from "../pages/Books/BookDetail"
import BookDelete from "../pages/Books/BookDelete";
import BookEdit from "../pages/Books/BookEdit";
import CreateBook from "../pages/Books/CreateBook";
import BookList from "../pages/Books/BookList"

import { AuthContextComponent } from "../contexts/authContext";



function App() {
  return (
    <div>
    <AuthContextComponent>
    <div>
          <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/book/create" element={<ProtectedRoute component={CreateBook} />} />
        <Route path="/book/:id" element={<ProtectedRoute component={BookDetail} />} />
        <Route path="/book/:id" element={<ProtectedRoute component={BookDelete} />} />
        <Route path="/book/detail/:id" element={<ProtectedRoute component={BookEdit} />} />
        <Route path="/book/list" element={<ProtectedRoute component={BookList} />} />
      </Routes>
      </div>
    </AuthContextComponent>
    </div>
  );
}

export default App;
