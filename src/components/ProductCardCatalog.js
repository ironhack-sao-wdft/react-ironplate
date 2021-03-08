import { Card, Button } from "react-bootstrap";

function ProductCardCatalog(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.picture}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>R${props.price}</Card.Text>
        <Button variant="primary">See details!</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardCatalog;