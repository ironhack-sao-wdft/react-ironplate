import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BooksList from "../pages/Books/BookList";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Navbar from "./Navbar";


// Livros
import CreateBook from '../pages/Books/CreateBook'
//import BooksList from "../pages/Books/BookList";
import BookDetail from '../pages/Books/BookDetail'
import BookDelete from "../pages/Books/BookDelete";
import Update from "../pages/Books/BookEdit";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <div>
      <Navbar />
      <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ProtectedRoute component={BooksList} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/book" element={<ProtectedRoute component={CreateBook} />} />
        {/*<Route path="/book/list" element={<ProtectedRoute component={BooksList} />}/>*/}
        <Route path="/book/:id" element={<ProtectedRoute component={BookDetail} />}/>
        <Route path="/book/delete/:id" element={<ProtectedRoute component={BookDelete} />}/>
        <Route path="/update/:id" element={<ProtectedRoute component={Update} />}/>
      </Routes>
      </div>
      </div>
      
    </AuthContextComponent>
  );
}

export default App;
