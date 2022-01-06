import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import CadastrarLivro from "../pages/Livros/CadastroLivro";
import DetalheLivro from "../pages/Livros/DetalheLivro";
import ListaLivro from "../pages/Livros/ListaLivro";
import ProtectedRoute from "../pages/auth/ProtectedRoute";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <div>
      <AuthContextComponent>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route
              path="/cadastrarLivro"
              element={<ProtectedRoute component={CadastrarLivro} />}
            />
            <Route
              path="/lista/livro"
              element={<ProtectedRoute component={ListaLivro} />}
            />
            <Route
              path="/livro/:id"
              element={<ProtectedRoute component={DetalheLivro} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

      </AuthContextComponent>
    </div>
  );
}

export default App;
