import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem", height: "450px" }}>
      <Card.Img
        variant="top"
        src={props.state.picture}
        style={{ height: "280px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.state.name}</Card.Title>
        <Card.Text>R$ {props.state.price}</Card.Text>
        {/* <Button variant="primary">See details!</Button> */}
        <Link
          to={`product/${props.state._id}`}
          className="btn detail-btn-orange"
        >
          See Details!
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
