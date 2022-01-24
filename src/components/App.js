import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import BookCadastro from "../pages/books/BookCadastro";
import BookDetail from "../pages/books/BookDetail";
import BookDelete from "../pages/books/BookDelete";
import BookEdit from "../pages/books/BookEdit";


import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div>
      <AuthContextComponent>
        <div>
          <Navbar />
          <div className="container-fluid mt-3 row-col-md-4">
            <Routes>
              <Route path="/" element={<ProtectedRoute component={Home} />} />
              <Route
                path="/cadastrarBook"
                element={<ProtectedRoute component={BookCadastro} />}
              />
              
              <Route
                path="/book/detail/:id"
                element={<ProtectedRoute component={BookDetail} />}
              />
              <Route
                path="/book/delete/:id"
                element={<ProtectedRoute component={BookDelete} />}
              />
              <Route
                Route
                path="/edit-book/:id"
                element={<ProtectedRoute component={BookEdit} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </AuthContextComponent>
    </div>
  );
}

export default App;