import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../routeComponents/Home.css";

function ProductCardCatalog(props) {
  return (
    <div className="col-lg-3 col-12 m-3" key={props.key}>
      <Card style={{ width: "18rem", height: "450px" }}>
        <Card.Img
          variant="top"
          src={props.picture}
          style={{ height: "280px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>R${props.price}</Card.Text>
          <Card.Text>{props.description}</Card.Text>
          <Link to={`product/${props.id}`} className="btn detail-btn-orange">
            See Details!
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCardCatalog;
