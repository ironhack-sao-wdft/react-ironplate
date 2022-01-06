import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";


function CardLivro(props) {
  const { loggedInUser } = useContext(AuthContext);
  return (
    <Link to={`/livro/${props.id}`}>
      <div className="card" style={{ width: "70rem", height: "20rem" }}>
        <div className="card-body">
          <h3 className="title">{props.title}</h3>
          <h3 className="author">{props.author}</h3>
          <h3 className="estado">
            {"Estado:"} {props.estado}
          </h3>
          <p className="card-text cols=6 rows=4">{props.descricao}</p>
          {loggedInUser.user._id === props.userId ? (
            <>
              <div className="editar">
                <Link to={`/editar-post/${props._id}`}>Editar</Link>
              </div>
              <div className="deletar">
                <Link to={`/delete/${props._id}`}>Deletar</Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default CardLivro;
