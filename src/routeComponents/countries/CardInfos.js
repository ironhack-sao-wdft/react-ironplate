export default function CardInfos(props) {
  return (
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={props.imagem} className="card-img" alt={props.name} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
