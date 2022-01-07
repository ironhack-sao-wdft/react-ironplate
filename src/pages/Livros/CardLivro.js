import { Link } from "react-router-dom";

function CardLivro(props) {
  return (
    <Link
      to={`/livro/detalhe/${props._id}`}
      className="list-group-item list-group-item-action"
    >
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.coverImage} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <p class="card-text">
            <h2>Título</h2>
            <p>
              <strong>{props.title}</strong>
            </p>
          </p>
          <p>
            <h2>Author</h2>
            <p>
              <strong>{props.author}</strong>
            </p>
          </p>
          <h2>Gênero</h2>
          <p>
            <strong>{props.genre}</strong>
          </p>
          <h2>Ano</h2>
          <p>
            <strong>{props.releaseYear}</strong>
          </p>
          <h2>Sinopse</h2>
          <p>
            <strong>{props.synopsis}</strong>
          </p>
        </div>
        <div className="btn btn-primary">
          <Link to={`/livro/detalhe`}> Ver Detalhe</Link>
        </div>
      </div>
    </Link>
  );
}

export default CardLivro;