import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);
  return (
    <nav className="navbar bg-dark text-right">
      <h1 className="text-warning">Cadastro de livros</h1>

      <Link className=" text-warning" to="/sobre">
        Sobre
      </Link>
      <Link className="buttonB text-warning" to="/cadastrarLivro">
        Cadastrar Livro
      </Link>

      <div>
        {loggedInUser.user._id ? (
          <>
            <span className="text-warning">
              Bem-vindo, {loggedInUser.user.name}
            </span>
            <button onClick={logout} className="btn btn-primary ">
              Sair
            </button>
          </>
        ) : (
          <Link className="buttonC" to="/login">
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
