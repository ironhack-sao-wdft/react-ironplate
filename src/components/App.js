import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import CadastrarLivro from "../pages/Livros/CadastroLivro";


import ProtectedRoute from "../pages/auth/ProtectedRoute";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <div>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<ProtectedRoute component={Home} />} />
          <Route
            path="/cadastrarLivro"
            element={<ProtectedRoute component={CadastrarLivro} />}
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
