import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Lista from "../pages/Lista";
import Home from "../pages/Home";

import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import CadastrarLivro from "../pages/Livros/CadastroLivro";
import DetalheLivro from "../pages/Livros/DetalheLivro";
import Navbar from "../components/Navbar";
import DeleteLivro from "../pages/Livros/DeleteLivro";
import EditLivro from "../pages/Livros/EditLivro";
import Rodape from "../components/Rodape";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <div className="main">
      <AuthContextComponent>
        <Navbar />
        <div className="container-fluid mb-3 content">
          <Routes>
            <Route
              path="/lista"
              element={<ProtectedRoute component={Lista} />}
            />

            <Route
              path="/cadastrarLivro"
              element={<ProtectedRoute component={CadastrarLivro} />}
            />
            <Route
              path="/livro/detalhe/:id"
              element={<ProtectedRoute component={DetalheLivro} />}
            />
            <Route
              path="/livro/delete/:id"
              element={<ProtectedRoute component={DeleteLivro} />}
            />
            <Route
              Route
              path="/edit-livro/:id"
              element={<ProtectedRoute component={EditLivro} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Rodape />
      </AuthContextComponent>
    </div>
  );
}

export default App;
